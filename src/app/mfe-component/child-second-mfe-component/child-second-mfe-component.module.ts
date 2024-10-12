import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildSecondMfeComponentComponent } from './child-second-mfe-component.component';
import { SecondChildMfeComponentRoutingModule } from './child-second-mfe-component.routing.module';

@NgModule({
  declarations: [ChildSecondMfeComponentComponent],
  imports: [CommonModule, SecondChildMfeComponentRoutingModule],
})
export class SecondChildMfeComponentModule {}
