import type { Book } from "../models/Book";
import { Person } from "../models/Person";
import { Repository } from "../utils/Repository";

export class Library {
  constructor(
    private booksRepo: Repository<Book>,
    private peopleRepo: Repository<Person>
  ) {}

  addBook(book: Book): void {
    this.booksRepo.add(book);
  }

  removeBook(bookId: number): void {
    this.booksRepo.remove(bookId);
  }

  findBooksByTitle(query: string): Book[] {
    const q = query.toLowerCase();
    return this.booksRepo
      .getAll()
      .filter((b) => b.title.toLowerCase().includes(q));
  }

  findBooksByAuthor(query: string): Book[] {
    const q = query.toLowerCase();
    return this.booksRepo
      .getAll()
      .filter((b) => b.author.toLowerCase().includes(q));
  }

  findBooksByYear(year: number): Book[] {
    return this.booksRepo.getAll().filter((b) => b.year === year);
  }

  listAvailable(): Book[] {
    return this.booksRepo.getAll().filter((b) => b.available);
  }

  borrowBook(bookId: number, userId: number): void {
    const book = this.booksRepo.getById(bookId);
    if (!book) throw new Error(`Book ${bookId} not found`);
    if (!book.available) throw new Error(`Book ${bookId} is not available`);
    const user = this.peopleRepo.getById(userId);

    if (!user) throw new Error(`User ${userId} not found`);

    book.available = false;
  }

  returnBook(bookId: number): void {
    const book = this.booksRepo.getById(bookId);
    if (!book) throw new Error(`Book ${bookId} not found`);
    if (book.available) throw new Error(`Book ${bookId} is already returned`);

    book.available = true;
  }
}
