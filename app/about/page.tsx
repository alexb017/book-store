import { Metadata } from 'next';
import Nav from '@/components/nav';
import About from './about';

export const metadata: Metadata = {
  title: 'About | Book Store',
  description: 'Learn more about Book Store',
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="mx-5 my-24">
        <About />
      </div>
    </main>
  );
}
