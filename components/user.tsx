import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { CartModal } from "./cart/modal";
import GitHubSignOutButton from "./github-sign-out";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function User() {
  const session = await auth.api.getSession({ headers: await headers() });
  // console.log('User:', user);

  if (!session) {
    return (
      <Button asChild variant="outline" className="rounded-full shadow-none">
        <Link href="/sign-in">Sign In</Link>
      </Button>
    );
  }

  const user = session.user;

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-5">
        <CartModal />
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Avatar className="h-8 w-8 outline-solid outline-offset-1 outline-orange-300">
              <AvatarImage src={user.image || ""} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="font-semibold leading-none">
              <span className="text-xs font-normal">Happy reading,</span>{" "}
              <br></br> {user.name || "User"}
            </p>
          </Link>

          <GitHubSignOutButton />
        </div>
      </div>
    </div>
  );
}
