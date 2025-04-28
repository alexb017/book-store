import { Metadata } from 'next';
import { getAllBooks } from '@/lib/db';
import HeaderShop from './header';
import BookCover from '@/components/book-cover';
import Nav from '@/components/nav';

export const metadata: Metadata = {
  title: 'Shop | Book Store',
  description: 'Shop for books online at Book Store',
};

export default async function ShopPage() {
  const books = await getAllBooks();

  return (
    <div>
      <Nav />
      <div className="mx-8 my-24">
        <div className="flex flex-col items-start gap-8">
          <HeaderShop />
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 3xl:grid-cols-10">
            {books.map((book, index: number) => (
              <BookCover key={index} book={book} index={index * 0.01} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
