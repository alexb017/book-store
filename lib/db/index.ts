import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";
// import dotenv from 'dotenv';
import { eq } from "drizzle-orm";
import { user } from "./schema";
import { unstable_cache } from "next/cache";

// Load environment variables from .env file
// dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env file");
}

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
  schema,
});

// Get all books
export const getAllBooks = unstable_cache(
  async () => {
    const books = await db.query.book.findMany();

    if (!books) {
      console.log("No books found in the database");
      return [];
    }

    return books;
  },
  ["all-books"],
  { revalidate: 60 * 60 * 24 }
);

// Get a limited number of books
export const getLimitedBooks = unstable_cache(
  async (limit: number) => {
    const books = await db.query.book.findMany({
      limit,
    });

    if (!books) {
      console.log("No books found in the database");
      return [];
    }

    return books;
  },
  ["limited-books"],
  { revalidate: 60 * 60 * 24 }
);

// Get cart items for a specific user
export const getCartItems = async (userId: string) => {
  const cartItems = await db.query.user.findFirst({
    where: eq(user.id, userId),
    with: {
      cart: {
        with: {
          book: true,
        },
      },
    },
  });

  if (!cartItems) {
    console.log("No cart items found for user:", userId);
    return [];
  }

  return cartItems?.cart || [];
};

// Get book by ISBN
export const getBookByIsbn = unstable_cache(
  async (isbn: string) => {
    const book = await db.query.book.findFirst({
      where: eq(schema.book.isbn, isbn),
    });

    if (!book) {
      console.log("No book found with ISBN:", isbn);
      return null;
    }

    return book;
  },
  ["book-by-isbn"],
  { revalidate: 60 * 60 * 24 }
);
