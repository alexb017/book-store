'use client';

import { motion } from 'motion/react';
import type { BookCover } from '@/lib/types';

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
        layoutId={`${page}-book-content-${book.isbn}`}
        onClick={onClick}
        className="bg-white rounded-2xl cursor-pointer"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          layoutId={`${page}-book-cover-${book.isbn}`}
          className="aspect-[310/500] rounded-xl overflow-hidden shadow-lg"
        >
          <motion.img
            layoutId={`${page}-book-cover-image-${book.isbn}`}
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
