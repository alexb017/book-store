import { serial, text, timestamp, integer, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Schema for the users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  image: text('image').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Schema for the cart items table
export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  bookIsbn: integer('book_isbn').notNull(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  imageUrl: text('image_url').notNull(),
  quantity: integer('quantity').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Relations for the user and cart items tables (one-to-many)
// A user can have multiple cart items, but each cart item belongs to one user
export const userRelations = relations(users, ({ many }) => ({
  cartItems: many(cartItems),
}));

// Relations for the cart items table (one-to-one)
// Each cart item belongs to one user
export const cartItemRelations = relations(cartItems, ({ one }) => ({
  user: one(users, {
    fields: [cartItems.userId],
    references: [users.id],
  }),
}));
