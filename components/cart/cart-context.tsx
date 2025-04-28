'use client';

import { createContext, useContext, use, useMemo } from 'react';
import { CartContextType, CartItemWithBook } from '@/lib/types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
  cartPromise,
}: {
  children: React.ReactNode;
  cartPromise: Promise<CartItemWithBook[]>;
}) {
  // Use the cartPromise to fetch the initial cart items
  // and store them in the context
  const initialCart = use(cartPromise);

  // Memoize the context value to avoid unnecessary re-renders
  const value = useMemo(() => ({ initialCart }), [initialCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
