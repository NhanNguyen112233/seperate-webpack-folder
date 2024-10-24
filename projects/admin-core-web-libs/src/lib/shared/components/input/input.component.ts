import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { InputDirective } from '../../directive/input/input.directive';
const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};
@Component({
  selector: 'tpb-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule, FormWrapperComponent, InputDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  isDisabled: boolean = false;

  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;
  @Input() placeholder: string = '';
  @Input() value= '';
  @Input() minLength: number =DEFAULT_INPUT_CONFIG.minLength;
  @Input() maxLength: number =DEFAULT_INPUT_CONFIG.maxLength;
  @Input() required: boolean =false;

  private onChange: any = (value:string) => {};
  private onTouched: any = () => {};
  private onValidatorChange: any = () => {};
  

  constructor(@Self() @Optional() private ngControl:NgControl) {
    if(this.ngControl){
      this.ngControl.valueAccessor = this;
    }
    console.log('ng control',this.ngControl);
    
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
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnValidatorChange(fn: any): void {
    this.onValidatorChange = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

   onChangeValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.onValidatorChange();
  }
}
