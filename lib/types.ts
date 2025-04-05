import { Variants } from 'motion/react';
import { users, books, cartItems } from './db/schema';

export type User = typeof users.$inferSelect;
export type Book = typeof books.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;

export type BookCover = {
  book: Book;
  page?: string;
  delay?: number;
  onClick: () => void;
};

export type BookDetails = {
  book: Book;
  page?: string;
  onClose: () => void;
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
