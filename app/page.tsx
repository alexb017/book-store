import Nav from '@/components/nav';
import Home from './home';
import BooksList from '@/components/books-list';
import HomeFooter from '@/components/home-footer';
import { getLimitedBooks } from '@/lib/db';

export default async function HomePage() {
  const books = await getLimitedBooks(6);
  // console.log(books);

  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center gap-10 px-5 my-32">
        <Home />
        <BooksList books={books} page="home" />
        <HomeFooter />
      </div>
    </main>
  );
}
