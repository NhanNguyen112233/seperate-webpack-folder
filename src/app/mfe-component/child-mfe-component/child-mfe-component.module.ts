import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildMfeComponentComponent } from './child-mfe-component.component';
import { ChildMfeComponentRoutingModule } from './child-mfe-component.routing.module';

@NgModule({
  declarations: [ChildMfeComponentComponent],
  imports: [CommonModule, ChildMfeComponentRoutingModule],
})
export class ChildMfeComponentModule {}
