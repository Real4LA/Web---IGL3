import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Input() categories: string[] = [];

  @Output() bookEdit = new EventEmitter<Book>();
  @Output() bookDelete = new EventEmitter<number>();

  searchTerm: string = '';
  sortBy: string = '';

  get filteredBooks(): Book[] {
    let result = [...this.books];

    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.category.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    if (this.sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'availability') {
      result.sort((a, b) => (a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1));
    }

    return result;
  }

  get totalBooks(): number {
    return this.filteredBooks.length;
  }

  onEdit(book: Book) {
    this.bookEdit.emit(book);
  }

  onDelete(bookId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.bookDelete.emit(bookId);
    }
  }
}
