import { Variants } from 'motion/react';

export type Book = {
  title: string;
  description: string;
  author: string;
  book_image: string;
  publisher: string;
  primary_isbn13: number;
};

export type BookCover = {
  book: Book;
  isSelected?: boolean;
  delay?: number;
  onClick: () => void;
};

export type BookDetails = {
  book: Book;
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
