import Link from 'next/link';
import { User } from '@/components/user';
import MenuToggle from './menu-toggle';

export default function Nav() {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-16">
      <div className="flex items-center justify-between w-full h-16 px-5">
        <div className="flex items-center gap-5 w-[40%]">
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
