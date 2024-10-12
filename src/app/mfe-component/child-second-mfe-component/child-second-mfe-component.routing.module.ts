import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { ChildSecondMfeComponentComponent } from './child-second-mfe-component.component';

const childRoutingConfig: Route[] = [
  {
    path: 'second-child',
    component: ChildSecondMfeComponentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(childRoutingConfig)],
})
export class SecondChildMfeComponentRoutingModule {}
