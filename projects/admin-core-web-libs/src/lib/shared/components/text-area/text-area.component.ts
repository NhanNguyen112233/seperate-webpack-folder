import { Component, EventEmitter, forwardRef, Input, Optional, Output, Self } from '@angular/core';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { InputDirective } from '../../directive/input/input.directive';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';

@Component({
  selector: 'tpb-text-area',
  standalone: true,
  imports: [CommonModule,FormWrapperComponent,ReactiveFormsModule,FormsModule, FormWrapperComponent, InputDirective],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
})
export class TextAreaComponent implements ControlValueAccessor {
  disabled: boolean = false;

  @Input() width: string = '100%';
  @Input() height: string = '116px';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() minLength: number = DEFAULT_INPUT_CONFIG.minLength;
  @Input() maxLength: number = DEFAULT_INPUT_CONFIG.maxLength;
  @Input() required: boolean = false;

  @Output() onInputChange= new EventEmitter<string>();


  private onChange: (value:string)=>void = (value:string) => {};
  private onTouched: ()=>void = () => {};
  private onValidatorChange: ()=>void = () => {};

  constructor(
    @Self() @Optional() private ngControl:NgControl
  ) {
    if(this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
   } 

   get valid(){
    return !!this.ngControl?.control?.valid;
  }

  get invalid(){
    return !!this.ngControl?.control?.invalid;
  }

  get dirty(){ 
    return !!this.ngControl?.control?.dirty;
  }

  get touched(){
    return !!this.ngControl?.control?.touched;
  }

  public writeValue(value: any): void {
    this.value=value;
  }

  public registerOnChange(fn: any): void {
    this.onChange=fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled=isDisabled;
  }

  public onFocus(): void {
    console.log('Input focused');
  }

  public onBlur(): void {
    console.log('Input blurred');
    this.onTouched();
  }

  public onChangeValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.onValidatorChange();
    this.onInputChange.emit(value);
  }

  isInputInvalid(){
    return this.invalid && this.touched || this.dirty && this.invalid;
  }

  genCustomClass() {  

  }
}
