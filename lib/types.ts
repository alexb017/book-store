import { Variants } from 'motion/react';
import { users, books, cartItems } from './db/schema';

export type User = typeof users.$inferSelect;
export type Book = typeof books.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;

export type CartItemWithBook = CartItem & {
  book: Book;
};

export type CartContextType = {
  initialCart: CartItemWithBook[] | undefined;
};

export type Links = {
  name: string;
  path: string;
};

export type PathProps = {
  d?: string;
  variants?: Variants;
  transition?: { duration: number };
};
