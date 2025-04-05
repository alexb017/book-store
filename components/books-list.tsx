'use client';

import { useState } from 'react';
import type { Book } from '@/lib/types';
import BookCover from '@/components/book-cover';
import BookDetails from '@/components/book-details';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function BooksList({
  books,
  page,
}: {
  books: Book[];
  page: 'home' | 'shop';
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedBook = books.find((book: Book) => book.isbn === selectedId);

  return (
    <div
      className={cn('relative w-full', {
        'xl:max-w-7xl 3xl:max-w-screen-2xl': page === 'home',
      })}
    >
      <motion.div
        className={cn(`grid gap-10 my-8`, {
          'grid-cols-8 3xl:grid-cols-10': page === 'shop',
          'grid-cols-6 px-5': page === 'home',
        })}
        initial="initial"
        animate={page}
        layout
      >
        {books.map((book: Book, index: number) => (
          <BookCover
            key={index}
            book={book}
            page={page}
            onClick={() => setSelectedId(book.isbn)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && selectedBook && (
          <BookDetails
            book={selectedBook}
            page={page}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
