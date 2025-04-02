import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { users, cartItems } from './schema';

const sql = neon(process.env.NEON_DATABASE_URL as string);

export const db = drizzle(sql, {
  schema,
});

const main = async () => {
  try {
    console.log('Seeding database...');

    // Delete existing data
    await db.delete(users);
    await db.delete(cartItems);

    // Seed users
    await db.insert(users).values([
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        image: 'https://example.com/johndoe.jpg',
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@gmail.com',
        image: 'https://example.com/janesmith.jpg',
      },
    ]);

    // Seed cart items
    await db.insert(cartItems).values([
      {
        id: 1,
        userId: 1,
        bookIsbn: 9780134190440,
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        imageUrl: 'https://example.com/pragmatic-programmer.jpg',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        userId: 1,
        bookIsbn: 9780134685991,
        title: 'Effective Java',
        author: 'Joshua Bloch',
        imageUrl: 'https://example.com/effective-java.jpg',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        userId: 2,
        bookIsbn: 9780134757599,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        imageUrl: 'https://example.com/clean-code.jpg',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

main();
