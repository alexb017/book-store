import Nav from '@/components/nav';
import Home from './home';
import { getBooksFromNYTApi } from '@/lib/get-books';
import BooksList from '@/components/books-list';

export default async function HomePage() {
  const books = await getBooksFromNYTApi({
    lists: ['hardcover-fiction'],
    limit: 6,
  });

  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center gap-10 px-5 my-24">
        <Home />
        <BooksList books={books} />
      </div>
    </main>
  );
}
