import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { Mfe2ComponentComponent } from './mfe2-component.component';

const routes: Route[] = [
  {
    path: 'mfe3-component',
    component: Mfe2ComponentComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Mfe2RoutingComponentModule {}
