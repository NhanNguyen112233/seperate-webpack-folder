import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormsModule, NgControl } from '@angular/forms';
import { SharedModule } from '../../module/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { InputOptionComponent } from './input-option/input-option.component';
import { InputSelectComponent } from './input-select/input-select.component';

const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};
@Component({
  selector: 'admin-search-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule,InputOptionComponent,InputSelectComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'outline' },
  }],
  templateUrl: './search-select.component.html',
  styleUrl: './search-select.component.scss'
})
export class SearchSelectComponent {
 @Input() className:string="";
}
