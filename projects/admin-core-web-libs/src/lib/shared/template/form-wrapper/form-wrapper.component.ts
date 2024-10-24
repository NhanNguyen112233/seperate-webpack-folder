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
export class FormWrapperComponent implements AfterContentInit {
  @Input() class: string = '';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;
  @Input() isDisabled:boolean=false;
  @Input() errorState:boolean=false;

  //we can create a service to handle error message
  @Input() errorMessage:string='Có lỗi xảy ra, vui lòng thử lại sau!';
 @ContentChildren(NgControl,{descendants:true}) controls!: QueryList<NgControl>;  
 invalidControls: NgControl[] = [];

 constructor(private formGroupDirective: FormGroupDirective) {}


ngAfterContentInit(): void {
  // console.log('control',this.controls);
  this.controls.forEach(control=>{
    console.log('control',control);
    // control.valueChanges?.pipe(debounceTime(300)).subscribe((value)=>{ 
    //   console.log('value',value);
    //   console.log('valuecontrol',control);

    //   this.checkValidation();
    // }); 

    // const valueAccessor=control.valueAccessor as any;
    // console.log('valueAccessor',valueAccessor);
    
    // const nativeElement = valueAccessor['elementRef']?.nativeElement ;
    //   if (nativeElement) {
    //     fromEvent(nativeElement, 'focus').subscribe(() => {});
    //     fromEvent(nativeElement, 'blur').subscribe(() => {});
    //   }
   
      
  });

    // this.formGroupDirective.form.valueChanges.pipe(debounceTime(300)).subscribe((e) => {
    //   console.log('e',e);
      
    //   this.checkValidation();
    // });
  
}


checkValidation() {
  // console.log('this.controls',this.controls);
  
  this.invalidControls = this.controls.filter(control => control.invalid && (control.dirty || control.touched));
  console.log('invalidControls',this.invalidControls);
  
  // this.updateStyles();
}

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
