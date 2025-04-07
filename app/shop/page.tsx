import { getAllBooks } from '@/lib/db';
import BooksList from '@/components/books-list';
import HeaderShop from './header';

export default async function ShopPage() {
  const books = await getAllBooks();

  return (
    <div>
      <HeaderShop />
      <BooksList books={books} page="shop" />
    </div>
  );
}
