import { Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '../../module/shared.module';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'admin-date-picker',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    provideNativeDateAdapter()
  ]
})
export class DatePickerComponent {

}
