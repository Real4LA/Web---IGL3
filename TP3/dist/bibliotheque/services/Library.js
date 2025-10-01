"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    booksRepo;
    peopleRepo;
    constructor(booksRepo, peopleRepo) {
        this.booksRepo = booksRepo;
        this.peopleRepo = peopleRepo;
    }
    addBook(book) {
        this.booksRepo.add(book);
    }
    removeBook(bookId) {
        this.booksRepo.remove(bookId);
    }
    findBooksByTitle(query) {
        const q = query.toLowerCase();
        return this.booksRepo
            .getAll()
            .filter((b) => b.title.toLowerCase().includes(q));
    }
    findBooksByAuthor(query) {
        const q = query.toLowerCase();
        return this.booksRepo
            .getAll()
            .filter((b) => b.author.toLowerCase().includes(q));
    }
    findBooksByYear(year) {
        return this.booksRepo.getAll().filter((b) => b.year === year);
    }
    listAvailable() {
        return this.booksRepo.getAll().filter((b) => b.available);
    }
    borrowBook(bookId, userId) {
        const book = this.booksRepo.getById(bookId);
        if (!book)
            throw new Error(`Book ${bookId} not found`);
        if (!book.available)
            throw new Error(`Book ${bookId} is not available`);
        const user = this.peopleRepo.getById(userId);
        if (!user)
            throw new Error(`User ${userId} not found`);
        book.available = false;
    }
    returnBook(bookId) {
        const book = this.booksRepo.getById(bookId);
        if (!book)
            throw new Error(`Book ${bookId} not found`);
        if (book.available)
            throw new Error(`Book ${bookId} is already returned`);
        book.available = true;
    }
}
exports.Library = Library;
