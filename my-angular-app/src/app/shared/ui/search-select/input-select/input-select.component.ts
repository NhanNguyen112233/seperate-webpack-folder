import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormsModule, NgControl } from '@angular/forms';
import { SharedModule } from '../../../module/shared.module';
import { InputOptionComponent } from '../input-option/input-option.component';

@Component({
  selector: 'admin-input-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule,InputOptionComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {
  isOpen: boolean = false;
  selectedOptions = {
    label: '',
    value: '',
  };
  searchValue = '';
  temptList = [] as { label: string; value: string }[];

  @Input() list: { label: string; value: string; isCheck?: boolean }[] = [];

  ngOnInit(): void {}

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
    console.log('control', this.control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.list = this.list.map((i) => {
      return {
        ...i,
        isCheck: false,
      };
    });
    this.temptList = this.list;
  }
  handleFilter(key: string) {
    if (!key) {
      this.list = this.temptList;
    } else {
      this.list = [
        ...this.temptList.filter((i) =>
          i.label.toLowerCase().includes(key.trim().toLowerCase())
        ),
      ];
    }
  }

  handleSetValue() {
    this.selectedOptions.label = this.temptList.find(
      (i) => i.value === this.selectedOptions.value
    )?.label as string;
    this.list = this.list.map((i) => {
      return {
        ...i,
        isCheck: i.value === this.selectedOptions.value,
      };
    });
    return this.selectedOptions.label;
  }

  isError() {
    console.log(';this.control.control', this.control.control);

    return this.control.control?.invalid;
  }

  onChange = (value: string) => {
    console.log('value', value);
  };

  onTouched = () => {};

  registerOnChange(fn: any): void {
    console.log('vao day');

    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: any): void {
    this.selectedOptions.value = value;
  }

  registerOnValidatorChange(fn: () => void): void {}

  validate(control: AbstractControl<any, any>): any | null {}

  handleClick() {
    this.isOpen = !this.isOpen;
  }

  handleSetOptionValue({ label, value }: { label: string; value: string }) {
    this.selectedOptions = {
      label,
      value,
    };
    this.onChange(this.selectedOptions.value);
    this.isOpen = !this.isOpen;

    this.list = this.temptList.map((i) => {
      return {
        ...i,
        isCheck: i.label === label,
      };
    });
    this.temptList = this.list;
  }
}
