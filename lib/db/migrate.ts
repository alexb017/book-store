import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';

const sql = neon(process.env.NEON_DATABASE_URL!);
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
