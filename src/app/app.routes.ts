import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./mfe-component/mfe-component.module').then(
        (m) => m.MfeComponentModule
      ),
  },
];
