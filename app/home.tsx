'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 max-w-2xl">
      <motion.p
        className="tracking-widest text-neutral-500"
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
        className="text-6xl text-center font-semibold tracking-tighter"
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
      {/* <motion.p
        className="text-lg tracking-tight"
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
        Book Store brings the world of literature to your fingertips. Discover a
        diverse collection of contemporary and classic books, delivered straight
        to your home. Explore new authors, revisit old favorites, and embark on
        literary journeys from the comfort of your space.
      </motion.p> */}
      <motion.div
        className="flex items-center gap-5"
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
        <Button asChild className="rounded-full shadow-lg">
          <Link href="/shop">Shop Now</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/about">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  );
}
