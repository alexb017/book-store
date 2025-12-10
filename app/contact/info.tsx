'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';

export default function ContactInfo() {
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
        Your feedback help us improve our services. Please feel free to reach
        out to us!
      </motion.h1>
      <div className="flex flex-col items-start gap-4 max-w-lg w-full">
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
          Whether you have a question about our products, need assistance with
          your order, or just want to say hello, we`d love to hear from you!
        </motion.p>
        <form className="flex flex-col gap-4 w-full">
          <motion.div
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
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="h-11 rounded-xl"
            />
          </motion.div>
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
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="h-11 rounded-xl"
            />
          </motion.div>
          <motion.div
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
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="h-24 rounded-xl"
            />
          </motion.div>
          <motion.div
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
            <Button
              type="submit"
              variant="outline"
              className="w-full h-11 shadow-none rounded-xl"
            >
              Send Message
            </Button>
          </motion.div>
        </form>
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
          delay: 0.6,
        }}
      >
        We`ll get back to you as soon as possible. <br></br> Thank you for
        choosing Book Store!
      </motion.p>
    </div>
  );
}
