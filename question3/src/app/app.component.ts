import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { minimumWords } from './comment-limit';
import { notCountainName } from './comment-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class AppComponent {
  title = 'reactive.form';
  formGroup: FormGroup;
  formData?: Data;

  constructor(private formbuilder: FormBuilder) {
    this.formGroup = formbuilder.group(
      {
        name: ['', Validators.required],
        roadnumber: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
        postalcode: ['', Validators.pattern('^[A-Z][0-9][A-Z][ ]?[0-9][A-Z][0-9]$')],
        comment: ['', minimumWords(10)],
      },
      {
        validators: notCountainName(),
      }
    );

    this.formGroup.valueChanges.subscribe((v) => (this.formData = v));
  }
}

interface Data {
  name?: string | null;
  roadnumber?: string | null;
  postalcode?: string | null;
  comment?: string | null;
}
