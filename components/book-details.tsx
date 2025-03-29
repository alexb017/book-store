'use client';

import { type BookDetails } from '@/lib/types';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function BookDetails({ book, page, onClose }: BookDetails) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`${page}-book-content-${book.primary_isbn13}`}
        className="max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-5">
          <motion.div
            layoutId={`${page}-book-cover-${book.primary_isbn13}`}
            className="flex items-center justify-center"
          >
            <motion.img
              layoutId={`${page}-book-cover-image-${book.primary_isbn13}`}
              src={book.book_image}
              alt={book.title}
              className="rounded-xl w-[210px] 3xl:w-[310px] h-[338px] 3xl:h-[500px]"
            />
          </motion.div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              {book.title}
            </h1>
            <div className="flex flex-col items-center">
              <small className="text-neutral-500 leading-none">Author</small>
              <p>{book.author}</p>
            </div>
            <form>
              <Button type="submit" className="rounded-full shadow-lg">
                Buy Now
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
