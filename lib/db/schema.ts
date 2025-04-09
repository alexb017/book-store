import {
  text,
  timestamp,
  integer,
  pgTable,
  varchar,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import type { AdapterAccountType } from 'next-auth/adapters';

// Stores information about registered users
export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull().unique(),
  image: text('image'),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
});

// Stores information about user accounts
export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    type: text('type').$type<AdapterAccountType>().notNull(),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    expiresAt: integer('expires_at'),
    tokenType: text('token_type'),
    scope: text('scope'),
    idToken: text('id_token'),
    sessionState: text('session_state'),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
);

// This table stores the session information for users
// Is optional and can be used for db sessions strategy
// It is not used in this example
export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

// This table stores the verification tokens for users
// Is optional and can be used for magic link
// It is not used in this example
export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ]
);

// Stores information about the books available in the store
export const books = pgTable('books', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  isbn: varchar('isbn').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  imageUrl: text('image_url').notNull(),
  price: integer('price').notNull(),
  genre: text('genre').notNull(),
});

// This is a"join table" that connects users with their cart items
export const cartItems = pgTable('cart_items', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  bookId: text('bookId')
    .notNull()
    .references(() => books.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// A user can have many items in their cart
export const userRelations = relations(users, ({ many }) => ({
  cartItems: many(cartItems),
  accounts: many(accounts),
  sessions: many(sessions),
}));

// A book can appear in many different users' carts
export const bookRelations = relations(books, ({ many }) => ({
  cartItems: many(cartItems),
}));

// Each cart item belongs to a single user and a single book
export const cartItemRelations = relations(cartItems, ({ one }) => ({
  user: one(users, {
    fields: [cartItems.userId],
    references: [users.id],
  }),
  book: one(books, {
    fields: [cartItems.bookId],
    references: [books.id],
  }),
}));
