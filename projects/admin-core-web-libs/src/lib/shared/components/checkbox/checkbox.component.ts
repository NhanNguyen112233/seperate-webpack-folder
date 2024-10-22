import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ControlValueAccessor, FormsModule, NgControl } from "@angular/forms";
import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";

@Component({
  selector: "tpb-checkbox",
  standalone: true,
  imports: [MatCheckboxModule, FormsModule],
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.scss",
})
export class CheckboxComponent implements ControlValueAccessor {
  @ViewChild("matCheckbox", { static: true }) matCheckbox!: MatCheckbox;
  @Input() indeterminate = false;
  @Input() disabled = false;
  @Input() value = false;
  @Output() changeEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(@Self() @Optional() private control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public onChange($event: any) {
    this.changeEvent.emit($event);
    this.onChangeFn(this.value);
  }
}
