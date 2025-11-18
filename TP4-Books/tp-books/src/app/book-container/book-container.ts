import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookListComponent } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, BookListComponent, BookForm],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainerComponent {
  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  bookToEdit: Book | null = null;

  books: Book[] = [
    new Book({
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'contact@gallimard.fr',
      publisherPhone: '71234567',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true,
      stock: 15,
    }),
    new Book({
      id: 2,
      title: 'Une brève histoire du temps',
      author: 'Stephen Hawking',
      publisherEmail: 'info@flammarion.fr',
      publisherPhone: '71234568',
      releaseDate: '1988-01-01',
      category: 'Science',
      isAvailable: true,
      stock: 8,
    }),
    new Book({
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      publisherEmail: 'contact@albin-michel.fr',
      publisherPhone: '71234569',
      releaseDate: '2011-01-01',
      category: 'Histoire',
      isAvailable: false,
      stock: 0,
    }),
    new Book({
      id: 4,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      publisherEmail: 'info@pearson.com',
      publisherPhone: '71234570',
      releaseDate: '2008-08-01',
      category: 'Informatique',
      isAvailable: true,
      stock: 12,
    }),
  ];

  onBookAdded(book: Book) {
    const newBook = new Book({
      ...book,
      id: this.books.length > 0 ? Math.max(...this.books.map((b) => b.id)) + 1 : 1,
    });
    this.books = [...this.books, newBook];
    this.bookToEdit = null;
  }

  onBookUpdated(book: Book) {
    this.books = this.books.map((b) => (b.id === book.id ? book : b));
    this.bookToEdit = null;
  }

  onBookEdit(book: Book) {
    this.bookToEdit = { ...book };
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onBookDelete(bookId: number) {
    this.books = this.books.filter((b) => b.id !== bookId);
    if (this.bookToEdit?.id === bookId) {
      this.bookToEdit = null;
    }
  }
}
