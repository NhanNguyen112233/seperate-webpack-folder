import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOptions } from '../select/select.i';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@Components/checkbox/checkbox.component';
@Component({
  selector: 'tpb-options',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  @Input() items: ISelectOptions[] = [];

  @Input() checkOnSelect: boolean = false;

  @Input() multiple: boolean = true;

  @Output() onSelect = new EventEmitter<
    ISelectOptions | ISelectOptions[] | any
  >();

  handleSelect(item: any) {
    this.onSelect.emit(item);
  }

  isItemSelected() {
    return false;
  }
}
