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
        <Button asChild variant="default" className="rounded-full shadow-xl">
          <Link href="/sign-in">Sign in</Link>
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
          <Button variant="default" className="rounded-full shadow-xl">
            Hi, {user.name}! Sign out
          </Button>
        </form>
      )}
    </div>
  );
}
