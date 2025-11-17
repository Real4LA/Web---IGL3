import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css'],
})
export class EtudiantFormComponent {
  classes = ['GLSI', 'IGL', 'IDS', 'ICE'];

  model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  newEtudiant() {
    this.model = new Etudiant(42, '', '', '');
  }
  resetEtudiant(form: NgForm) {
    this.newEtudiant();
    form.resetForm(this.model);
    this.submitted = false;
  }
}
