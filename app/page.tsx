import Nav from '@/components/nav';
import Home from './home';
import { getBooksFromNYTApi } from '@/lib/get-books';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/lib/types';

export default async function HomePage() {
  const books = await getBooksFromNYTApi({ lists: ['science'], limit: 6 });

  return (
    <main>
      <Nav />
      <div className="px-5 my-24">
        <Home />
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
    </main>
  );
}
