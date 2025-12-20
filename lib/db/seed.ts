import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";
import { book } from "./schema";
import dotenv from "dotenv";

// Load environment variables from .env.local file
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env file");
}

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
  schema,
});

const main = async () => {
  try {
    console.log("Seeding database...");

    // Delete existing data
    // await db.delete(user);
    // await db.delete(account);
    await db.delete(book);
    // await db.delete(cart);

    // Seed users
    // const insertUsers = await db
    //   .insert(user)
    //   .values([
    //     {
    //       name: "John Doe",
    //       email: "johndoe@gmail.com",
    //       image: "https://example.com/johndoe.jpg",
    //       emailVerified: new Date(),
    //     },
    //     {
    //       name: "Jane Smith",
    //       email: "janesmith@gmail.com",
    //       image: "https://example.com/janesmith.jpg",
    //       emailVerified: new Date(),
    //     },
    //   ])
    //   .returning({ id: user.id });

    // Seed accounts
    // await db.insert(account).values([
    //   {
    //     id: crypto.randomUUID(),
    //     userId: insertUsers[0].id,
    //     provider: "github",
    //     providerAccountId: "123456789",
    //     type: "oauth",
    //     accessToken: "access_token_1",
    //     refreshToken: "refresh_token_1",
    //     expiresAt: 1234567890,
    //     tokenType: "Bearer",
    //     scope: "profile email",
    //     idToken: "id_token_1",
    //     sessionState: "active",
    //   },
    //   {
    //     userId: insertUsers[1].id,
    //     provider: "google",
    //     providerAccountId: "987654321",
    //     type: "oauth",
    //     accessToken: "access_token_2",
    //     refreshToken: "refresh_token_2",
    //     expiresAt: 1234567890,
    //     tokenType: "Bearer",
    //     scope: "profile email",
    //     idToken: "id_token_2",
    //     sessionState: "active",
    //   },
    // ]);

    // Seed books
    await db
      .insert(book)
      .values([
        {
          isbn: "9780062457738",
          title: "Everything Is Tuberculosis",
          author: "John Green",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743849142/books/220341389_ahgwl5.png",
          price: 1499,
          genre: "Nonfiction",
        },
        {
          isbn: "9780987654321",
          title: "Careless People",
          author: "Sarah Wynn-Williams",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743852312/books/223436601_wgccfu.jpg",
          price: 1699,
          genre: "Nonfiction",
        },
        {
          isbn: "9781234567890",
          title: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743855484/books/23692271_q69pc1.jpg",
          price: 1429,
          genre: "Nonfiction",
        },
        {
          isbn: "9785876543212",
          title: "Thinking Fast and Slow",
          author: "Daniel Kahneman",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743855671/books/11468377_dmkfzj.jpg",
          price: 1355,
          genre: "Nonfiction",
        },
        {
          isbn: "9781594489501",
          title: "The Subtle Art of Not Giving a F*ck",
          author: "Mark Manson",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743872172/books/28257707_lh6ezp.jpg",
          price: 1889,
          genre: "Nonfiction",
        },
        {
          isbn: "9780525536516",
          title: "The Ministry of Time",
          author: "Kaliane Bradley",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743872467/books/199798179_yvf8mt.jpg",
          price: 1399,
          genre: "Science Fiction",
        },
        {
          isbn: "9780593105240",
          title: "Dune",
          author: "Frank Herbert",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743872760/books/44767458_axngoy.jpg",
          price: 3374,
          genre: "Science Fiction",
        },
        {
          isbn: "9780553801507",
          title: "1984",
          author: "George Orwell",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743875547/books/61439040_op4x3m.jpg",
          price: 1299,
          genre: "Science Fiction",
        },
        {
          isbn: "9780451524935",
          title: "Nobody's Fool",
          author: "Harlan Coben",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743875782/books/217394492_xv1dgp.jpg",
          price: 1499,
          genre: "Crime",
        },
        {
          isbn: "9780452284234",
          title: "Killer Potential",
          author: "Hannah Deitch",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743875961/books/215217589_mmt4dg.jpg",
          price: 1499,
          genre: "Crime",
        },
        {
          isbn: "9780452290594",
          title: "The Hymn to Dionysus",
          author: "Natasha Pulley",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743876364/books/211004841_zdwm6l.jpg",
          price: 933,
          genre: "Art",
        },
        {
          isbn: "9780452290595",
          title: "The Man Nobody Killed",
          author: "Elon Green",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743876495/books/211004205_tyrbao.jpg",
          price: 1499,
          genre: "Art",
        },
        {
          isbn: "9780452290596",
          title: "Inventing the Renaissance",
          author: "Ada Palmer",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743876625/books/215968557_jchbdy.jpg",
          price: 3562,
          genre: "Art",
        },
        {
          isbn: "9780452290597",
          title: "I Leave It Up to You",
          author: "Jinwoo Chong",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743876809/books/214269353_iglzka.jpg",
          price: 1399,
          genre: "Romance",
        },
        {
          isbn: "9780452290598",
          title: "The Prince Without Sorrow",
          author: "Maithree Wijesekara",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743876903/books/217060000_itdgea.jpg",
          price: 1299,
          genre: "Romance",
        },
        {
          isbn: "9780452290599",
          title: "Funny Story",
          author: "Emily Henry",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743877045/books/194802722_gegr6k.jpg",
          price: 1299,
          genre: "Romance",
        },
        {
          isbn: "9780452290600",
          title: "This Book Will Bury Me",
          author: "Ashley Winstead",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743877300/books/213570821_ejnljg.jpg",
          price: 1499,
          genre: "Thriller",
        },
        {
          isbn: "9780452290601",
          title: "The da Vinci Code",
          author: "Dan Brown",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743877434/books/55019161_a71cyh.jpg",
          price: 1499,
          genre: "Thriller",
        },
        {
          isbn: "9780452290602",
          title: "The Buffalo Hunter Hunter",
          author: "Stephen Graham Jones",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743877990/books/214565614_fsxpnm.webp",
          price: 1499,
          genre: "Thriller",
        },
        {
          isbn: "9780452290603",
          title: "When the Moon Hits Your Eye",
          author: "John Scalzi",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743878036/books/211004190_nlsxwe.jpg",
          price: 1499,
          genre: "Humor",
        },
        {
          isbn: "9780452290604",
          title: "The Fourth Consort",
          author: "Edward Ashton",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743878133/books/211003694_lowlth.jpg",
          price: 1499,
          genre: "Humor",
        },
        {
          isbn: "9780452290605",
          title: "Cat Kid Comic Club",
          author: "Dav Pilkey",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743878226/books/52891759_pevuze.jpg",
          price: 1299,
          genre: "Humor",
        },
        {
          isbn: "9780452290606",
          title: "Gone with the Wind",
          author: "Margaret Mitchell",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743878662/books/18405_ozjpfy.jpg",
          price: 699,
          genre: "Classic",
        },
        {
          isbn: "9780452290607",
          title: "The Diary of a Young Girl",
          author: "Anne Frank",
          imageUrl:
            "https://res.cloudinary.com/drbu50m1e/image/upload/v1743878745/books/127441416_jfyl4r.jpg",
          price: 251,
          genre: "Classic",
        },
      ])
      .returning({ id: book.id });

    // Seed cart items
    // await db.insert(cart).values([
    //   {
    //     userId: insertUsers[0].id,
    //     bookId: insertBooks[0].id,
    //     quantity: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     userId: insertUsers[0].id,
    //     bookId: insertBooks[1].id,
    //     quantity: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     userId: insertUsers[1].id,
    //     bookId: insertBooks[2].id,
    //     quantity: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     userId: insertUsers[1].id,
    //     bookId: insertBooks[3].id,
    //     quantity: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
  } catch (error) {
    console.error("Error during seeding:", error);
  }
};

main();
