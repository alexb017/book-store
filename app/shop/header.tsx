'use client';

import { motion } from 'motion/react';

export default function HeaderShop() {
  return (
    <div className="flex flex-col items-start gap-1">
      <motion.h1
        className="text-5xl font-[family-name:var(--font-roboto-slab)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
        Shop for books
      </motion.h1>
      <motion.p
        className="text-neutral-500"
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
        Browse our collection of books and find your next read.
      </motion.p>
    </div>
  );
}
