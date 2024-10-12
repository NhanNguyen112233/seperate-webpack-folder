import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MfeComponentComponent } from './mfe-component.component';

const mfeRoute: Route[] = [
  {
    path: 'mfe-component',
    component: MfeComponentComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./child-mfe-component/child-mfe-component.module').then(
            (m) => m.ChildMfeComponentModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import(
            './child-second-mfe-component/child-second-mfe-component.module'
          ).then((m) => m.SecondChildMfeComponentModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(mfeRoute)],
  exports: [],
})
export class MfeComponentRoutingModule {}
