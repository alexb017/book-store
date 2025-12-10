'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { Book } from '@/lib/types';
import Link from 'next/link';

export default function BookCover({
  book,
  index,
}: {
  book: Book;
  index: number;
}) {
  return (
    <Link href={`/book/${book.isbn}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index, ease: 'easeOut' }}
      >
        <motion.div
          className="aspect-310/500 rounded-xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
            width={310}
            height={500}
            priority={true}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
