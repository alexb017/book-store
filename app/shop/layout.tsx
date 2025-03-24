import { Metadata } from 'next';
import Nav from '@/components/nav';

export const metadata: Metadata = {
  title: 'Shop | Book Store',
  description: 'Shop for books online at Book Store',
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Nav />
      <div className="px-5 mt-24">{children}</div>
    </main>
  );
}
