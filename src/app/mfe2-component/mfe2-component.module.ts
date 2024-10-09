import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe2RoutingComponentModule } from './mfe2-component.routing.module.';
import { Mfe2ComponentComponent } from './mfe2-component.component';

@NgModule({
  declarations: [Mfe2ComponentComponent],
  imports: [CommonModule, Mfe2RoutingComponentModule],
})
export class Mfe2ComponentModule {}
