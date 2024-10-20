import {
  Component,
  Input,
  Optional,
  Self,
  SkipSelf,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  NgControl,
  ControlContainer,
  FormControl,
} from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../module/shared.module';
const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};
@Component({
  selector: 'admin-input',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() errorMessage: string = 'This field is invalid';
  @Input() className: string = '';

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (ngControl) {
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }

  get control() {
    return this.ngControl?.control as FormControl;
  }
}
