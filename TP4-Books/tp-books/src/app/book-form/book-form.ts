import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  @Input() categories: string[] = [];
  @Input() set bookToEdit(book: Book | null) {
    if (book) {
      this.isEditMode = true;
      this.bookModel = {
        id: book.id,
        title: book.title,
        author: book.author,
        publisherEmail: book.publisherEmail,
        publisherPhone: book.publisherPhone,
        releaseDate: book.releaseDate,
        category: book.category,
        stock: book.stock,
      };
    }
  }

  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();

  isEditMode = false;

  bookModel = {
    id: 0,
    title: '',
    author: '',
    publisherEmail: '',
    publisherPhone: '',
    releaseDate: '',
    category: '',
    stock: 0 as number | undefined,
  };

  validateTitle(title: string): boolean {
    // Check if title is only digits
    return !/^\d+$/.test(title);
  }

  validateReleaseDate(date: string): boolean {
    if (!date) return false;
    const year = new Date(date).getFullYear();
    return year > 1900;
  }

  onSubmit(form: NgForm) {
    if (
      form.valid &&
      this.validateTitle(this.bookModel.title) &&
      this.validateReleaseDate(this.bookModel.releaseDate)
    ) {
      const stock = this.bookModel.stock ?? 0;
      const bookData = new Book({
        id: this.bookModel.id,
        title: this.bookModel.title,
        author: this.bookModel.author,
        publisherEmail: this.bookModel.publisherEmail,
        publisherPhone: this.bookModel.publisherPhone,
        releaseDate: this.bookModel.releaseDate,
        category: this.bookModel.category,
        isAvailable: stock > 0,
        stock: this.bookModel.stock,
      });

      if (this.isEditMode) {
        this.bookUpdated.emit(bookData);
      } else {
        this.bookAdded.emit(bookData);
      }

      this.resetForm(form);
    }
  }

  resetForm(form: NgForm) {
    form.reset();
    this.isEditMode = false;
    this.bookModel = {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      stock: 0,
    };
  }
}
