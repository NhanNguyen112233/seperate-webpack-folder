import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';

@Component({
  selector: 'admin-form-field',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.scss',
})
export class FormWrapperComponent {
  @Input() class: string = '';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;

  customClass() {
    if (this.class) {
      return `form-field ${this.class}`;
    }
    return 'form-field';
  }
}
