import {
  Component,
  EventEmitter,
  Input,
  Output,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IButtonAppearance } from './button.i';

@Component({
  selector: 'tpb-button',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() appearance: IButtonAppearance = 'primary';
  @Input() class = '';
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<void>();

  customClass(): string {
    if (this.class) {
      return this.disabled ? `btn_disabled ${this.class}` : this.class;
    } else {
      return this.disabled
        ? `btn_${this.appearance}-disabled`
        : `btn-${this.appearance}`;
    }
  }
}
