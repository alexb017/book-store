'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/cart/cart-context';

export function CartModal() {
  const { initialCart } = useCart();
  console.log('Cart items:', initialCart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="relative [&_svg]:size-5 rounded-full hover:bg-transparent"
        >
          <ShoppingBag className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>Your cart is empty.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">{/* Books list */}</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
