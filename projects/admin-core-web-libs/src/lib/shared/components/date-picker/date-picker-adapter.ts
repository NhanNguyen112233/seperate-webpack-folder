import { Injectable } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  // Implement required methods for your custom date adapter
  // For example:

  constructor() {
    super();
  }
 
  // format(date: Date, displayFormat: Object): string { 

  // }
}

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'input',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'input',
    dateA11yLabel: 'input',
    monthYearA11yLabel: 'input',
  },
};