'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 max-w-3xl w-full">
      <motion.p
        className="text-sm text-neutral-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
      >
        Welcome to Book Store!
      </motion.p>
      <motion.h1
        className="text-5xl 2xl:text-6xl text-center font-(family-name:--font-roboto-slab)"
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
        Book Store brings the world of literature to your fingertips.
      </motion.h1>
      <motion.div
        className="flex items-center gap-2"
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
          className="bg-green-600 hover:bg-green-500 rounded-full shadow-none"
        >
          <Link href="/shop">Shop Now</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full shadow-none">
          <Link href="/about">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  );
}
