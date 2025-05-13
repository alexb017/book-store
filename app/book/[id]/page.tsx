import BookDetails from '@/components/book-details';
import { getBookByIsbn } from '@/lib/db';
import { notFound } from 'next/navigation';
import Nav from '@/components/nav';

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = await getBookByIsbn(id);
  // console.log('Book:', book);

  if (!book) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Nav />
      <div className="w-full max-w-3xl p-4 mt-24">
        <BookDetails book={book} />
      </div>
    </div>
  );
}
