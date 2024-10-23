import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { InputDirective } from '../../directive/input/input.directive';

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
    FormWrapperComponent,
    InputDirective,
  ],
  providers: [
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
export class DatePickerComponent implements OnInit {
  value = new Date();

  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;

  @ViewChild('picker', { static: true }) picker!: MatDatepicker<Date>;

  constructor(private adapter: DateAdapter<Date>) {}

  ngOnInit() {
    this.adapter.setLocale('vi');
  }
}
