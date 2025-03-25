import { Metadata } from 'next';
import Nav from '@/components/nav';
import Contact from './contact';

export const metadata: Metadata = {
  title: 'Contact | Book Store',
  description: 'Contact Book Store',
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <div className="mx-5 my-24">
        <Contact />
      </div>
    </main>
  );
}
