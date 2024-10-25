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
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() onClick = new EventEmitter<void>();

  handleClick($event: MouseEvent): void {
    
    if (this.disabled) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
      return;
    }
    if (this.type === 'submit' && this.disabled) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
      return;
    }
    this.onClick.emit();

  }

  customClass(): string {
    if (this.class) {
      return this.disabled ? `btn-disabled ${this.class}` : this.class;
    } else {
      // btn_${this.appearance}-disabled
      return this.disabled
        ? `btn-disabled`
        : `btn-${this.appearance}`;
    }
  }
}
