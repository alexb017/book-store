"use server";

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { user, cart } from "./schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { unstable_cache, revalidateTag } from "next/cache";

const CART_CACHE_TAG = "cart-items";

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user?.id || null;
}

// Get cart for a specific user
export async function getCartItems() {
  const userId = await getUserId();

  if (!userId) {
    return null;
  }

  return fetchCartItems(userId);
}

// Fetch and cache cart for a specific user
const fetchCartItems = (userId: string) =>
  unstable_cache(
    async () => {
      const cartItems = await db.query.user.findFirst({
        where: eq(user.id, userId),
        with: {
          cart: {
            with: {
              book: true,
            },
          },
        },
      });

      if (!cartItems) {
        console.log("No cart items found for user:", userId);
        return [];
      }

      return cartItems?.cart || [];
    },
    [`cart-items-${userId}`],
    { tags: [CART_CACHE_TAG] }
  );

// Add book to cart for a specific user
export async function addBookToCart(bookId: string) {
  const userId = await getUserId();
  if (!userId || !bookId) {
    return "User ID and Book ID are required";
  }

  try {
    await db.insert(cart).values({ userId, bookId, quantity: 1 });

    // Revalidate the cache for cart
    revalidateTag(CART_CACHE_TAG, "max");
  } catch (error) {
    console.error("Error adding book to cart:", error);
    return "Failed to add book to cart";
  }
}
