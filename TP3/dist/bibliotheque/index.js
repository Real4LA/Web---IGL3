"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./utils/Repository");
const User_1 = require("./models/User");
const Admin_1 = require("./models/Admin");
const ApiService_1 = require("./services/ApiService");
const Library_1 = require("./services/Library");
async function main() {
    const bookRepo = new Repository_1.Repository();
    const peopleRepo = new Repository_1.Repository();
    const admin = new Admin_1.Admin(1, "Mohamed");
    const userA = new User_1.User(2, "Alaa");
    peopleRepo.add(admin);
    peopleRepo.add(userA);
    const apiBooks = await (0, ApiService_1.fetchBooks)();
    apiBooks.forEach((b) => bookRepo.add(b));
    const library = new Library_1.Library(bookRepo, peopleRepo);
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
