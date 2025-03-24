import Image from 'next/image';
import { type Book } from '@/lib/types';
import Link from 'next/link';

const apiKey = process.env.NYT_BOOKS_API_KEY;

async function getBooksFromNYTApi() {
  try {
    const lists = [
      'hardcover-fiction',
      'hardcover-nonfiction',
      'young-adult',
      'science',
    ];
    const allBooks = [] as Book[];

    for (const list of lists) {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${apiKey}`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch data from NYT API');
      }

      const data = await res.json();
      allBooks.push(...data.results.books);
    }

    return allBooks;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ShopPage() {
  const books = await getBooksFromNYTApi();
  // console.log(books);

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
