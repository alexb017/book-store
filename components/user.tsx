import { Button } from '@/components/ui/button';
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
        <form
          action={async () => {
            'use server';
            await signOut({
              redirectTo: '/',
            });
          }}
        >
          <Button className="rounded-full shadow-none">
            Hi, {user.name}! Sign Out
          </Button>
        </form>
      )}
    </div>
  );
}
