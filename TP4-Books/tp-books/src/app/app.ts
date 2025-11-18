import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookContainerComponent } from './book-container/book-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tp-books');
}
