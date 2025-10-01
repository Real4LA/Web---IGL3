import type { Book } from "../models/Book";

const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    available: true,
  },
  {
    id: 2,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    year: 2015,
    available: true,
  },
  {
    id: 3,
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    year: 2019,
    available: false,
  },
];

export async function fetchBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_BOOKS.map((b) => ({ ...b }))), 300);
  });
}
