'use client';

import { motion } from 'motion/react';

export default function HomeFooter() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center max-w-lg">
        <motion.p
          className="text-lg text-neutral-500 text-center"
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
          Explore our collection of books, from timeless classics to modern
          bestsellers. A curated selection awaits you.
        </motion.p>
      </div>
      <motion.p
        className="text-neutral-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
          delay: 0.6,
        }}
      >
        &copy; 2025 BookStore. All rights reserved.
      </motion.p>
    </div>
  );
}
