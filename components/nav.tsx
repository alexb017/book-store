import Link from 'next/link';
import { User } from '@/components/user';
import MenuToggle from './menu-toggle';

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-24 bg-white/60 backdrop-blur-xl">
      <div className="flex items-center justify-between w-full h-24 px-8">
        <div className="flex items-center w-[40%]">
          {/* Menu toggle animation */}
          <MenuToggle />
        </div>
        {/* Logo */}
        <div className="flex items-center justify-center w-[20%]">
          <Link href="/" className="text-lg font-medium tracking-tighter">
            Book Store
          </Link>
        </div>
        {/* Sign in */}
        <div className="flex items-center gap-5 w-[40%] justify-end">
          <User />
        </div>
      </div>
    </div>
  );
}
