import { Variants } from 'motion/react';

export type Links = {
  name: string;
  path: string;
};

export type PathProps = {
  d?: string;
  variants?: Variants;
  transition?: { duration: number };
};
