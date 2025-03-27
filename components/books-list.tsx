'use client';

import { useState } from 'react';
import { type Book } from '@/lib/types';
import BookCover from '@/components/book-cover';
import BookDetails from '@/components/book-details';
import { motion, AnimatePresence } from 'motion/react';

export default function BooksList({ books }: { books: Book[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedBook = books.find(
    (book: Book) => book.primary_isbn13 === selectedId
  );

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-6 gap-10 my-8 px-32 3xl:px-60"
        layout
      >
        {books.map((book: Book, index: number) => (
          <BookCover
            key={book.primary_isbn13}
            book={book}
            delay={index * 0.1}
            onClick={() => setSelectedId(book.primary_isbn13)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedBook && (
          <BookDetails
            book={selectedBook}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
