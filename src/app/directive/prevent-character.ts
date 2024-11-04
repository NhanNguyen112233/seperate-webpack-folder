import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventCharacters]',
  standalone: true,
})
export class PreventCharactersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!key.match(/[a-zA-Z0-9]/)) {
      event.preventDefault();
    }
  }
}
