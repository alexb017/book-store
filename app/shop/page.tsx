import { getBooksFromNYTApi } from '@/lib/get-books';
import BooksList from '@/components/books-list';

export default async function ShopPage() {
  const books = await getBooksFromNYTApi({});

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight">Shop for books</h1>
      <BooksList books={books} page="shop" />
    </div>
  );
}
