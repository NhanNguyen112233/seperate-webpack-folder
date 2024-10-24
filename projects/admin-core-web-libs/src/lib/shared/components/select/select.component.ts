import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormWrapperComponent } from '../../template/form-wrapper/form-wrapper.component';
import { InputDirective } from '../../directive/input/input.directive';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { AdminElementService } from '../../services/admin-element.service';

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
  providers: [AdminElementService],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements AfterViewInit {
  isOpen: boolean = false;

  @Input() placeholder: string = 'Tất cả';
  @Input() width: string = DEFAULT_INPUT_CONFIG.width;
  @Input() height: string = DEFAULT_INPUT_CONFIG.height;

  @ViewChild('icon', { static: true }) icon!: ElementRef;
  @ViewChild('select') select!: ElementRef;
  @ViewChild('option') option!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      !(this.select && this.select.nativeElement.contains(event.target)) &&
      !(this.option && this.option.nativeElement.contains(event.target))
    ) {
      this.isOpen = false;
      this.adminElementService.rotate(this.icon.nativeElement, 360);
    }
  }

  constructor(
    private adminElementService: AdminElementService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {}

  handleSelect() {
    this.rotate();
  }

  rotate() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.adminElementService.rotate(this.icon.nativeElement, 180);
    } else {
      this.adminElementService.rotate(this.icon.nativeElement, 360);
    }
  }
}
