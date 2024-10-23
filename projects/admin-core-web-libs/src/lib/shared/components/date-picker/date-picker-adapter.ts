import { Injectable } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends DateAdapter<Date> {
  // Implement required methods for your custom date adapter
  // For example:

  constructor() {
    super();
  }
  parse(value: any): Date | null {
    // Custom parse logic
    return new Date(value);
  }

  format(date: Date, displayFormat: Object): string {
    // Custom format logic
    return date.toDateString();
  }

  getYear(date: Date): number {
    return date.getFullYear();
  }

  getMonth(date: Date): number {
    return date.getMonth();
  }

  getDate(date: Date): number {
    return date.getDate();
  }

  getDayOfWeek(date: Date): number {
    return date.getDay();
  }

  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    // Custom logic for month names
    return [];
  }

  getDateNames(): string[] {
    // Custom logic for date names
    return [];
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    // Custom logic for day of week names
    return [];
  }

  getYearName(date: Date): string {
    return date.getFullYear().toString();
  }

  getFirstDayOfWeek(): number {
    // Custom logic for first day of the week
    return 0;
  }

  getNumDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  clone(date: Date): Date {
    return new Date(date.getTime());
  }

  createDate(year: number, month: number, date: number): Date {
    return new Date(year, month, date);
  }

  today(): Date {
    return new Date();
  }

  addCalendarYears(date: Date, years: number): Date {
    return new Date(date.setFullYear(date.getFullYear() + years));
  }

  addCalendarMonths(date: Date, months: number): Date {
    return new Date(date.setMonth(date.getMonth() + months));
  }

  addCalendarDays(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() + days));
  }

  toIso8601(date: Date): string {
    return date.toISOString();
  }

  isDateInstance(obj: any): boolean {
    return obj instanceof Date;
  }

  isValid(date: Date): boolean {
    return !isNaN(date.getTime());
  }

  invalid(): Date {
    return new Date(NaN);
  }
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