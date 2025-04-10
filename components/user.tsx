'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export function User() {
  const { data: session } = useSession();
  const user = session?.user || null;
  // console.log('User:', user);

  return (
    <div className="flex items-center">
      {!user ? (
        <Button asChild variant="outline" className="rounded-full shadow-none">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      ) : (
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Avatar className="h-8 w-8 outline outline-offset-1 outline-orange-300">
              <AvatarImage src={user.image || ''} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="leading-none">
              Happy reading, <br></br> {user.name || 'User'}
            </p>
          </Link>

          <Button
            variant="outline"
            className="rounded-full shadow-none"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
}
