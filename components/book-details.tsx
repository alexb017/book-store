'use client';

import type { Book } from '@/lib/types';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { addBookToCart } from '@/lib/db/actions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function BookDetails({ book }: { book: Book }) {
  const { data: session } = useSession();
  const user = session?.user || null;

  if (!book) return null;

  return (
    <div className="flex items-start gap-10">
      <div className="w-1/3">
        <motion.div className="aspect-[210/338] 3xl:aspect-[310/500] rounded-xl overflow-hidden shadow-lg">
          <motion.img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-start gap-5 w-2/3">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-3xl font-semibold font-[family-name:var(--font-playfair-display)]">
            {book.title}
          </h1>
          <p className="text-neutral-500">{book.author}</p>
        </div>
        {!user ? (
          <Button
            asChild
            variant="outline"
            className="rounded-full shadow-none"
          >
            <Link href="/sign-in">Sign In to Buy</Link>
          </Button>
        ) : (
          <Button
            type="submit"
            className="flex items-center gap-2 font-normal bg-green-600 hover:bg-green-500 rounded-full shadow-none"
            onClick={() => {
              addBookToCart(book.id);
            }}
          >
            <span className="text-base font-semibold">${book.price}</span> Buy
            Now
          </Button>
        )}
      </div>
    </div>
  );
}
