import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeComponentRoutingModule } from './mfe-component.routing.module';
import { MfeComponentComponent } from './mfe-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MfeComponentComponent],
  imports: [CommonModule, MfeComponentRoutingModule, RouterModule],
})
export class MfeComponentModule {}
