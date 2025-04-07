'use client';

import type { BookDetails } from '@/lib/types';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function BookDetails({ book, page, onClose }: BookDetails) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`${page}-book-content-${book.isbn}`}
        className="relative w-full max-w-[310px] 3xl:max-w-[410px] p-12 bg-white rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="secondary"
          className="absolute top-0 -right-12 rounded-full shadow-none"
          size="icon"
          onClick={onClose}
        >
          <X className="text-neutral-500" size={20} />
        </Button>
        <div className="flex flex-col items-center gap-5">
          <motion.div
            layoutId={`${page}-book-cover-${book.isbn}`}
            className="aspect-[210/338] 3xl:aspect-[310/500] rounded-xl overflow-hidden shadow-lg"
          >
            <motion.img
              layoutId={`${page}-book-cover-image-${book.isbn}`}
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-center font-[family-name:var(--font-playfair-display)]">
                {book.title}
              </h1>
              <p className="text-neutral-500">{book.author}</p>
            </div>
            <form>
              <Button
                type="submit"
                className="flex items-center gap-2 font-normal bg-green-600 hover:bg-green-500 rounded-full shadow-none"
              >
                <span className="text-base font-semibold">${book.price}</span>{' '}
                Buy Now
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
