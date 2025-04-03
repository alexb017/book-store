ALTER TABLE "cart_items" ALTER COLUMN "book_isbn" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "cart_items" ADD COLUMN "price" integer NOT NULL;