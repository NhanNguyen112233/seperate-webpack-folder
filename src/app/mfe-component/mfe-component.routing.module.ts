import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MfeComponentComponent } from './mfe-component.component';

const mfeRoute: Route[] = [
  {
    path: 'mfe-component',
    component: MfeComponentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(mfeRoute)],
  exports: [],
})
export class MfeComponentRoutingModule {}
