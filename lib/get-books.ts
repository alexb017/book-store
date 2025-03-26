import { type Book } from '@/lib/types';

const apiKey = process.env.NYT_BOOKS_API_KEY;

export async function getBooksFromNYTApi({
  lists = [
    'hardcover-fiction',
    'hardcover-nonfiction',
    'young-adult',
    'science',
  ],
  revalidate = 60 * 60 * 24,
  limit = 0,
}: {
  lists?: string[];
  revalidate?: number;
  limit?: number;
}) {
  try {
    // Create array of fetch promises for each list
    const fetchPromises = lists.map(async (list) => {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${apiKey}`,
        {
          next: { revalidate },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data.results.books;
    });

    // Wait for all fetch promises to resolve
    const allBooks = await Promise.all(fetchPromises);
    // console.log(allBooks);

    // Combine all books into a single array
    let books = allBooks.flat() as Book[];

    // Return limited number of books
    if (limit > 0) {
      books = books.slice(0, limit);
    }

    return books;
  } catch (error) {
    console.error(error);
    return [];
  }
}
