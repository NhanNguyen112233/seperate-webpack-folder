import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-component-first',
  standalone: true,
  imports: [],
  templateUrl: './custom-component-first.component.html',
  styleUrl: './custom-component-first.component.scss',
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])]
})
export class CustomComponentFirstComponent {

  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()
  get message(): string {
    return this._message;
  }

  private _message = '';
@Output()closed=new EventEmitter<void>();

}
