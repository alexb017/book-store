import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { auth, signOut } from '@/auth';

export async function User() {
  const session = await auth();
  const user = session?.user;
  // console.log(user);

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

          <form
            action={async () => {
              'use server';
              await signOut({
                redirectTo: '/',
              });
            }}
          >
            <Button variant="outline" className="rounded-full shadow-none">
              Sign Out
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
