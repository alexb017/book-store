import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import dotenv from 'dotenv';
import { eq } from 'drizzle-orm';
import { users } from './schema';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in .env file');
}

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
  schema,
});

// get all books
export const getAllBooks = async () => {
  const books = await db.query.books.findMany();

  if (!books) {
    console.log('No books found in the database');
    return [];
  }

  return books;
};

// get a limited number of books
export const getLimitedBooks = async (limit: number) => {
  const books = await db.query.books.findMany({
    limit,
  });

  if (!books) {
    console.log('No books found in the database');
    return [];
  }

  return books;
};

// get cart items for a specific user
export const getCartItems = async (userId: number) => {
  const cartItems = await db.query.users.findFirst({
    where: eq(users.id, userId),
    with: {
      cartItems: {
        with: {
          book: true,
        },
      },
    },
  });

  if (!cartItems) {
    console.log('No cart items found for user:', userId);
    return [];
  }

  return cartItems?.cartItems || [];
};
