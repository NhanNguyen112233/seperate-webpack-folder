import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { InputDirective } from '../../directive/input/input.directive';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'tpb-select',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent,
    FormsModule,
    FormWrapperComponent,
    InputDirective,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() placeholder: string = 'Tất cả';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;
}
