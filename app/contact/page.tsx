import { Metadata } from 'next';
import Nav from '@/components/nav';
import ContactInfo from './info';

export const metadata: Metadata = {
  title: 'Contact | Book Store',
  description: 'Contact Book Store',
};

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <div className="mx-8 my-24">
        <ContactInfo />
      </div>
    </div>
  );
}
