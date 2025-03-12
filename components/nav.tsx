'use client';

import Link from 'next/link';
import { useState } from 'react';
import * as motion from 'motion/react-client';
import { Button } from '@/components/ui/button';
import type { Links, PathProps } from '@/lib/types';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as Links[];

function NavLinks() {
  return (
    <motion.ul
      className="flex items-center gap-5 list-none m-0 p-0"
      variants={{
        open: {
          display: 'flex',
          transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
          display: 'none',
          transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
      }}
    >
      {navLinks.map((link, index) => (
        <motion.li
          key={index}
          className="flex items-center"
          variants={{
            open: {
              x: 0,
              opacity: 1,
              transition: {
                x: { stiffness: 1000, velocity: -100 },
              },
            },
            closed: {
              x: -20,
              opacity: 0,
              transition: {
                x: { stiffness: 1000 },
              },
            },
          }}
        >
          <Link
            href={link.path}
            className="flex items-center tracking-tight hover:text-neutral-500 transition-colors duration-200 ease-out"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function Path(props: PathProps) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
}

function MenuToggle({ toggle }: { toggle: () => void }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="p-0 w-4 h-4 border-none hover:bg-transparent shadow-none"
      onClick={toggle}
      aria-label="Toggle Menu"
    >
      <svg width="22" height="22" viewBox="0 0 22 19">
        <Path
          variants={{
            open: { d: 'M 3 16.5 L 17 2.5' },
            closed: { d: 'M 2 2.5 L 20 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            open: { d: 'M 3 2.5 L 17 16.346' },
            closed: { d: 'M 2 16.346 L 20 16.346' },
          }}
        />
      </svg>
    </Button>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-50 w-full h-16">
      <div className="flex items-center justify-between w-full h-16 px-5">
        <div className="flex items-center gap-5 w-[40%]">
          {/* Menu animation */}
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="flex items-center gap-5"
          >
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            <NavLinks />
          </motion.nav>
        </div>
        {/* Logo */}
        <div className="flex items-center justify-center w-[20%]">
          <Link href="/" className="text-lg font-medium tracking-tighter">
            Book Store
          </Link>
        </div>
        {/* Sign in */}
        <div className="flex items-center gap-5 w-[40%] justify-end">
          <Button asChild variant="default" className="rounded-full">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
