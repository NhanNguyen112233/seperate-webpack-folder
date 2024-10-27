import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Optional,
  Output,
  QueryList,
  Self,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { InputDirective } from '../../directive/input/input.directive';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { AdminElementService } from '../../services/admin-element.service';
import { IFormWrapperImpl } from '../../template/form-wrapper/form-wrapper.i';
import { ISelectOptions } from './select.i';
import { IAdminNgControl } from '../../constant/ng-control.i';

@Component({
  selector: 'tpb-select',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent,
    FormsModule,
    MatIconModule,
    FormWrapperComponent,
    InputDirective,
  ],
  providers: [AdminElementService],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent
  implements IFormWrapperImpl, ControlValueAccessor, IAdminNgControl
{
  isOpen: boolean = false;
  disabled: boolean = false;
  noReactiveFormState = {
    touched: false,
  };

  private onChange: (value: string) => void = (value: string) => {};
  private onTouched: () => void = () => {
    this.noReactiveFormState.touched = true;
  };
  private onValidatorChange: () => void = () => {};

  @Input() placeholder: string = 'Tất cả';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;

  @Input() selectOptions: ISelectOptions[] = [];
  @Input() selectedValue = 1;

  @Output() onInputChange = new EventEmitter<string>();

  @ViewChild('icon', { static: true }) icon!: ElementRef;
  @ViewChild('select') select!: ElementRef;
  @ViewChild('option') option!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      !(this.select && this.select.nativeElement.contains(event.target)) &&
      !(this.option && this.option.nativeElement.contains(event.target))
    ) {
      if (this.isOpen) {
        this.onTouched();
      }
      this.isOpen = false;
      this.adminElementService.rotate(this.icon.nativeElement, 360);
    }
  }

  constructor(
    private adminElementService: AdminElementService,
    private elementRef: ElementRef,
    @Self() @Optional() private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get valid() {
    return !!this.ngControl?.control?.valid;
  }

  get invalid() {
    return !!this.ngControl?.control?.invalid;
  }

  get dirty() {
    return !!this.ngControl?.control?.dirty;
  }

  get touched() {
    return this.ngControl
      ? !!this.ngControl?.control?.touched
      : this.noReactiveFormState.touched;
  }

  changeSelectState() {
    this.rotate();
  }

  isInputInvalid() {
    return this.invalid && this.touched;
  }

  showSelectedOption() {
    const foundedItem = this.selectOptions.find(
      (i) => i.value === this.selectedValue
    );
    return foundedItem ? foundedItem.label : '';
  }

  handleSelect(item: ISelectOptions) {
    this.selectedValue = item.value;
    this.rotate();
    this.onChange(item.value);
    this.onInputChange.emit(item.value);
    this.onTouched();
  }

  public writeValue(value: any): void {
    // Implement your logic to write the value to the component
    this.selectedValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onFocus(): void {}

  public onBlur(): void {
    this.onTouched();
  }

  private rotate() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.adminElementService.rotate(this.icon.nativeElement, 180);
    } else {
      this.adminElementService.rotate(this.icon.nativeElement, 360);
    }
  }
}
