// app/actions.ts
'use server';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in .env file');
}

export async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`SELECT * FROM cart_items WHERE user_id = 2`;
  return data;
}
