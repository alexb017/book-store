import Nav from '@/components/nav';
import Home from './home';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <div className="px-5 my-24">
        <Home />
      </div>
    </main>
  );
}
