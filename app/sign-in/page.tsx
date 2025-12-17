import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import GitHubSignInButton from '@/components/github-sign-in';

export const metadata: Metadata = {
  title: 'Sign In | Book Store',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between bg-neutral-50">
      <div className="flex justify-start w-full p-5">
        <Button
          asChild
          variant="link"
          className="text-sm text-muted-foreground font-normal hover:text-black hover:no-underline"
        >
          <Link href="/">
            <ArrowLeft /> Back to Book Store
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-80">
        <Card className="shadow-none border-none bg-transparent">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold tracking-tight">
              Welcome back
            </CardTitle>
            <CardDescription>Sign in to your account.</CardDescription>
          </CardHeader>
          <CardFooter>
              <GitHubSignInButton />
          </CardFooter>
        </Card>
      </div>
      <div className="text-sm text-center text-muted-foreground p-5 max-w-80">
        You acknowledge that you read, and agree to our{' '}
        <span className="text-black">terms and conditions</span>.
      </div>
    </div>
  );
}
