import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './date-picker-adapter';


// styling
// translate
// formControl

@Component({
  selector: 'tpb-date-picker',
  standalone: true,
  imports: [MatDatepickerModule],
  providers:[{
    provide: MAT_DATE_FORMATS,
    useValue:CUSTOM_DATE_FORMATS
  },{
    provide: DateAdapter,
    useFactory: ()=>CustomDateAdapter
  }],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {

}
