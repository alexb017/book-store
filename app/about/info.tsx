'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function AboutInfo() {
  return (
    <div className="flex flex-col items-start gap-5 max-w-3xl">
      <motion.h1
        className="text-5xl font-(family-name:--font-roboto-slab)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
        Welcome to Book Store! Step into our virtual shelves and discover a
        curated collection spanning genres from timeless classics to the latest
        bestsellers.
      </motion.h1>
      <div className="flex flex-col items-start gap-4 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            delay: 0.1,
          }}
        >
          Whether you`re a seasoned bibliophile or a casual reader, we`ve got
          something to ignite your imagination.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            delay: 0.2,
          }}
        >
          At the Book Store, we believe that every story has the power to
          transport, transform, and inspire. Start your literary journey with us
          today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full shadow-none"
          >
            <Link href="/shop">Browse Books</Link>
          </Button>
        </motion.div>
      </div>
      <motion.p
        className="text-sm text-neutral-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
          delay: 0.4,
        }}
      >
        For more information, please{' '}
        <Link href="/contact" className="text-black underline">
          contact
        </Link>{' '}
        us.
      </motion.p>
    </div>
  );
}
