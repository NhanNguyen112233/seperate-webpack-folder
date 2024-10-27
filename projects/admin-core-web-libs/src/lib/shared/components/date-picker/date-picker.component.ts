import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './date-picker-adapter';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { InputDirective } from '../../directive/input/input.directive';
import { IFormWrapperImpl } from '../../template/form-wrapper/form-wrapper.i';
import { IAdminNgControl } from '../../constant/ng-control.i';
import { MatIconModule } from '@angular/material/icon';
import { AdminIconRegisterService } from '../../services/admin-icon-register.service';

// styling
// translate
// formControl

// firefox sida
// .mat-calendar-table-header th {
//   text-align: center;
//   padding: 0 0 8px 0;
@Component({
  selector: 'tpb-date-picker',
  standalone: true,
  imports: [
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule,
    FormWrapperComponent,
    InputDirective,
  ],
  providers: [
    AdminIconRegisterService,
    {
      provide: MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS,
    },
    {
      provide: DateAdapter,
      useFactory: () => new CustomDateAdapter(),
    },
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent
  implements OnInit, ControlValueAccessor, IFormWrapperImpl, IAdminNgControl
{
  disabled = false;

  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;

  @Input() value: string | Date = '';
  @Input() minDate: Date | null = new Date();
  @Input() maxDate: Date | null = null;
  @Input() errorMessage: string = '';

  @Output() onInputChange = new EventEmitter<string>();

  @ViewChild('picker', { static: true }) picker!: MatDatepicker<Date>;

  private onChange: (value: string) => void = (value: string) => {};
  private onTouched: () => void = () => {};
  private onValidatorChange: () => void = () => {};

  constructor(
    private adapter: DateAdapter<Date>,
    private adminRegistryIconService: AdminIconRegisterService,
    @Self() @Optional() private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  get valid() {
    return !!this.ngControl?.control?.valid;
  }

  get invalid() {
    return !!this.ngControl?.control?.invalid;
  }

  get dirty() {
    return !!this.ngControl?.control?.dirty;
  }

  get touched() {
    return !!this.ngControl?.control?.touched;
  }

  ngOnInit() {
    this.adapter.setLocale('vi');
  }

  isInputInvalid() {
    return (this.invalid && this.touched) || (this.dirty && this.invalid);
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onFocus(): void {}

  public onBlur(): void {
    this.onTouched();
  }

  public onChangeValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.onValidatorChange();
    this.onInputChange.emit(value);
  }
}
