"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBooks = fetchBooks;
const MOCK_BOOKS = [
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
async function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_BOOKS.map((b) => ({ ...b }))), 300);
    });
}
