import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../projects/admin-core-web-libs/src/public-api';
import { DatePickerComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/date-picker/date-picker.component';
import { InputComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/input/input.component';
import { CheckboxComponent } from '../../projects/admin-core-web-libs/src/lib/shared/components/checkbox/checkbox.component';
import { SelectComponent } from 'projects/admin-core-web-libs/src/lib/shared/components/select/select.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { TextAreaComponent } from 'projects/admin-core-web-libs/src/lib/shared/components/text-area/text-area.component';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from 'dist/admin-core-web-libs/lib/shared/components/date-picker/date-picker-adapter';
// import { AdminCoreWebLibModule } from 'dist/admin-core-web-libs';

export function dateValidator(adapter: DateAdapter<Date>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return { required: true };
    }
    const date = adapter.parse(value, 'DD/MM/YYYY');
    if (!date || isNaN(date.getTime())) {
      return { invalidDate: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    InputComponent,
    ReactiveFormsModule,
    CheckboxComponent,
    SelectComponent,
    TextAreaComponent,
    // AdminCoreWebLibModule.forRoot({}) // Moved to the application's main module or bootstrap
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  noReactive = {
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    input: '',
  };

  onInputChange(event: any) {
    console.log(event);
  }
  selectOption = [
    {
      label: 'Tất cả',
      value: 'ALL',
    },
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
  ];
  title = 'admin-core-web';
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [
        { value: '', disabled: false },
        [Validators.required, Validators.maxLength(10)],
      ],
      des: ['', [Validators.required]],
      select: ['', [Validators.required]],
      date: [new Date(), []],
    });
  }

  onSubmit() {
    console.log('clicked');

    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }

  handleError(formControlName: string) {
    switch (formControlName) {
      case 'name':
        if (this.form.get('name')?.hasError('required')) {
          return 'Name is required';
        } else if (this.form.get('name')?.hasError('maxlength')) {
          return 'Name should not exceed 10 characters';
        } else {
          return '';
        }
      default:
        return '';
    }
  }
}
