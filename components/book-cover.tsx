'use client';

import { motion } from 'motion/react';
import { type BookCover } from '@/lib/types';

export default function BookCover({ book, page, onClick }: BookCover) {
  // Variants for the animation
  const variants = {
    initial: {
      opacity: 0,
      y: page === 'home' ? 20 : 0,
    },
    shop: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
      },
    },
    home: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.div variants={variants}>
      <motion.div
        layoutId={`${page}-book-content-${book.primary_isbn13}`}
        onClick={onClick}
      >
        <motion.div
          layoutId={`${page}-book-cover-${book.primary_isbn13}`}
          className="flex items-center justify-center"
        >
          <motion.img
            layoutId={`${page}-book-cover-image-${book.primary_isbn13}`}
            src={book.book_image}
            alt={book.title}
            width={310}
            height={500}
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
