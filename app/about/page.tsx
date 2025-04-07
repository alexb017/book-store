import { Metadata } from 'next';
import Nav from '@/components/nav';
import AboutInfo from './info';

export const metadata: Metadata = {
  title: 'About | Book Store',
  description: 'Learn more about Book Store',
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="mx-8 my-24">
        <AboutInfo />
      </div>
    </main>
  );
}
