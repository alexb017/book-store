import Nav from '@/components/nav';
import Home from './home';
import HomeFooter from '@/components/home-footer';
import { getLimitedBooks } from '@/lib/db';
import BookCover from '@/components/book-cover';

export default async function HomePage() {
  const books = await getLimitedBooks(6);
  // console.log(books);

  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center gap-10 px-5 my-32">
        <Home />
        <div className="w-full xl:max-w-7xl 3xl:max-w-screen-2xl">
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {books.map((book, index: number) => (
              <BookCover key={index} book={book} index={index * 0.1} />
            ))}
          </div>
        </div>
        <HomeFooter />
      </div>
    </main>
  );
}
