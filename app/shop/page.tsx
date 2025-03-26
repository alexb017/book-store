import Image from 'next/image';
import { type Book } from '@/lib/types';
import Link from 'next/link';
import { getBooksFromNYTApi } from '@/lib/get-books';

export default async function ShopPage() {
  const books = await getBooksFromNYTApi({});

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Shop for books</h1>
      <div className="grid grid-cols-8 3xl:grid-cols-12 gap-10 my-8">
        {books.map((book: Book) => (
          <Link
            href={book.primary_isbn13}
            key={book.primary_isbn13}
            className="flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Image
              src={book.book_image}
              alt={book.title}
              width={310}
              height={500}
              className="rounded-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
