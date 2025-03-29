'use client';

import { motion } from 'motion/react';

export default function HomeFooter() {
  return (
    <div className="flex flex-col items-center gap-5 px-5">
      <div className="flex flex-col items-center">
        <motion.p
          className="text-lg text-neutral-500"
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
          Explore our collection of books and find your next read.
        </motion.p>
        <motion.p
          className="text-lg text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.5,
            delay: 0.5,
          }}
        >
          Visit our shop to discover more titles and genres.
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
