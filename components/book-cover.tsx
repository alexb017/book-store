'use client';

import { motion } from 'motion/react';
import { type BookCover } from '@/lib/types';

export default function BookCover({ book, delay, onClick }: BookCover) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.5,
        delay: delay,
      }}
    >
      <motion.div
        layoutId={`book-content-${book.primary_isbn13}`}
        onClick={onClick}
      >
        <motion.div
          layoutId={`book-cover-${book.primary_isbn13}`}
          className="flex items-center justify-center"
        >
          <motion.img
            layoutId={`book-cover-image-${book.primary_isbn13}`}
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
