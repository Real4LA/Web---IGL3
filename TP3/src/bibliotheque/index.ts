import { Repository } from "./utils/Repository";
import type { Book } from "./models/Book";
import { Person } from "./models/Person";
import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { fetchBooks } from "./services/ApiService";
import { Library } from "./services/Library";

async function main() {
  const bookRepo = new Repository<Book>();
  const peopleRepo = new Repository<Person>();

  const admin = new Admin(1, "Mohamed");
  const userA = new User(2, "Alaa");
  peopleRepo.add(admin);
  peopleRepo.add(userA);

  const apiBooks = await fetchBooks();
  apiBooks.forEach((b) => bookRepo.add(b));

  const library = new Library(bookRepo, peopleRepo);
  library.addBook({
    id: 10,
    title: "Programming TypeScript",
    author: "Boris Cherny",
    year: 2019,
    available: true,
  });

  console.log("Books by author 'Dan':", library.findBooksByAuthor("Dan"));
  console.log("Available books:", library.listAvailable());

  console.log("Borrow book #1 by user #2");
  library.borrowBook(1, 2);
  console.log("Available after borrow:", library.listAvailable());

  console.log("Return book #1");
  library.returnBook(1);
  console.log("Available after return:", library.listAvailable());

  console.log("Remove book #2");
  library.removeBook(2);
  console.log("All books now:", bookRepo.getAll());
}

main().catch((err) => console.error(err));
