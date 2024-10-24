import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { DEFAULT_INPUT_CONFIG } from '../../constant/default-config';

@Directive({
  selector: 'input[type=text][adminInput],[adminInput]',
  standalone: true,
})
export class InputDirective implements AfterViewInit {
  @Input() fullWidth: boolean = false;
  @Input() height: string = DEFAULT_INPUT_CONFIG.innerHeight;
  @Input() width: string = DEFAULT_INPUT_CONFIG.innerWidth;

  @Input() placeholder: string = '';
  private readonly COMMON_CONFIG = {
    border: 'none',
    color: 'var(--purple-7)',
  };

  private readonly INPUT_REACT = {
    focus: {
      border: 'none',
      'user-select': 'none',
      outline: 'none',
    },
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.applyInitialStyles();
    this.applyEventListeners();
    this.applyPlaceholderStyle();
  }

  private applyInitialStyles() {
    const nativeElement = this.el.nativeElement;

    this.renderer.setStyle(
      nativeElement,
      'width',
      this.fullWidth ? '100%' : this.width
    );
    this.renderer.setStyle(nativeElement, 'height', this.height);

    for (const [property, value] of Object.entries(this.COMMON_CONFIG)) {
      this.renderer.setStyle(nativeElement, property, value);
    }
  }

  private applyEventListeners() {
    const nativeElement = this.el.nativeElement;

    for (const [event, styles] of Object.entries(this.INPUT_REACT)) {
      this.renderer.listen(nativeElement, event, () => {
        for (const [property, value] of Object.entries(styles)) {
          this.renderer.setStyle(nativeElement, property, value);
        }
      });
    }
  }

  private applyPlaceholderStyle() {
    const nativeElement = this.el.nativeElement;

    // Create a style element
    const styleElement = this.renderer.createElement('style');
    this.renderer.setProperty(
      styleElement,
      'innerHTML',
      `
      input[type=text][adminInput]::placeholder {
        color: var(--grey-2);
      }
    `
    );
    this.renderer.appendChild(document.head, styleElement);
  }
}
