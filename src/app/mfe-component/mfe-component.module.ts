import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeComponentRoutingModule } from './mfe-component.routing.module';
import { MfeComponentComponent } from './mfe-component.component';

@NgModule({
  declarations: [MfeComponentComponent],
  imports: [CommonModule, MfeComponentRoutingModule],
})
export class MfeComponentModule {}
