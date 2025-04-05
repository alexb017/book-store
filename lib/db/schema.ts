import {
  serial,
  text,
  timestamp,
  integer,
  pgTable,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Stores information about registered users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  image: text('image').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Stores information about the books available in the store
export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  isbn: varchar('isbn').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  imageUrl: text('image_url').notNull(),
  price: integer('price').notNull(),
  genre: text('genre').notNull(),
});

// This is a"join table" that connects users with their cart items
export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  bookId: integer('book_id')
    .notNull()
    .references(() => books.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// A user can have many items in their cart
export const userRelations = relations(users, ({ many }) => ({
  cartItems: many(cartItems),
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
