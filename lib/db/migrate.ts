import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in .env file');
}

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const migrateDb = async () => {
  try {
    await migrate(db, { migrationsFolder: 'lib/db/migrations' });

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Error during migration:', error);
  }
};

migrateDb();
