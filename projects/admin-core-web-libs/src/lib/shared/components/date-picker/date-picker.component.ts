import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { CUSTOM_DATE_FORMATS, CustomDateAdapter } from './date-picker-adapter';
import { CommonModule } from '@angular/common';


// styling
// translate
// formControl

@Component({
  selector: 'tpb-date-picker',
  standalone: true,
  imports: [MatDatepickerModule,CommonModule,MatNativeDateModule],
  providers:[{
    provide: MAT_DATE_FORMATS,
    useValue:CUSTOM_DATE_FORMATS
  },{
    provide: DateAdapter,
    useFactory: ()=>new CustomDateAdapter()
  }],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit {
 @Input() width:string="";
 @Input() height:string="";

 @ViewChild('picker',{static:true}) picker!:MatDatepicker<Date>;

 constructor(private adapter:DateAdapter<Date>){
 
 }

 ngOnInit(){
   this.adapter.setLocale('vi');
 }
}
