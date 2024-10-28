import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AdminConfirmModalComponent,
  AdminModalService,
  ButtonComponent,
  InputComponent,
} from 'admin-core-web-libs';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    SharedModule,
    ButtonComponent,
    MatIconModule,
    MatDialogModule,
    AdminConfirmModalComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AdminModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(AdminModalService) private adminModalService: AdminModalService // private adminModalService: AdminModalService // Injecting the service correctly
  ) {
    // console.log('adminModalService', this.adminModalService);

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
    this.adminModalService
      .openConfirmModal()
      .afterClosed()
      .subscribe((result) => {
        this.form.markAllAsTouched();
      });
  }
}
