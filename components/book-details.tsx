"use client";

import type { Book } from "@/lib/types";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { addBookToCart } from "@/lib/db/actions";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function BookDetails({ book }: { book: Book }) {
  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  if (!book) return null;

  return (
    <motion.div
      className="flex items-start gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
    >
      <div className="w-1/3">
        <div className="aspect-210/338 3xl:aspect-310/500 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
            width={310}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 w-2/3">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-5xl font-(family-name:--font-roboto-slab)">
            {book.title}
          </h1>
          <p className="text-lg">{book.author}</p>
          <p className="text-sm">
            <span className="text-neutral-500">Genre</span> {book.genre}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm">Price</p>
          <h2 className="text-3xl leading-none font-(family-name:--font-roboto-slab)">
            {formatPrice(book.price)}
          </h2>
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
            Buy Now
          </Button>
        )}
        <small>ISBN {book.isbn}</small>
      </div>
    </motion.div>
  );
}
