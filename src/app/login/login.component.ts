import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, InputComponent } from 'admin-core-web-libs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LoginComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      eToken: ['', [Validators.required]],
    });
  }

  handleError(formControlName: string) {
    return 'Vui lòng nhập đủ thông tin';
  }

  onSubmit() {
    console.log('vao day');

    this.form.markAllAsTouched();
  }
}
