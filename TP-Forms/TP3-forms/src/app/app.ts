import { Component, signal } from '@angular/core';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantFormComponent, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TP3-forms');
}
