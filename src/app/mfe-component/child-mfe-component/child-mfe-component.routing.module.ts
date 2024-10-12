import { ChildMfeComponentComponent } from './child-mfe-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

const childRoutingConfig: Route[] = [
  {
    path: 'first-child',
    component: ChildMfeComponentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(childRoutingConfig)],
})
export class ChildMfeComponentRoutingModule {}
