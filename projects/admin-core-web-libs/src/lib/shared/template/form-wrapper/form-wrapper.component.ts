import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormGroupDirective, FormsModule, NgControl } from '@angular/forms';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { debounce, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'admin-form-field',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.scss',
  providers: [FormGroupDirective],
})
export class FormWrapperComponent {
  @Input() class: string = '';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;
  @Input() isDisabled:boolean=false;
  @Input() errorState:boolean=false;

  //we can create a service to handle error message
  @Input() errorMessage:string='Có lỗi xảy ra, vui lòng thử lại sau!';


 constructor(private formGroupDirective: FormGroupDirective) {}

  customClass() {
    if (this.class) {
      if(this.errorState){
        return `form-field ${this.class} form-field-error`;
      }
      else{
        return `form-field ${this.class}`;
      }
    }
   
    if(this.errorState){
      return 'form-field form-field-error';
    }
    else{
      return 'form-field';
    }
  }
}
