import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Module',
      })
        .then((m) => m.MfeComponentModule)
        .catch((err) => console.error('Error loading remote module', err)),
  },
  // {
  //   path: 'mfe2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       // remoteEntry: 'http://localhost:4200/remoteEntry.js',
  //       remoteName: 'mfe2',
  //       exposedModule: './Module',
  //     })
  //       .then((m) => m.MfeComponentModule)
  //       .catch((err) => console.error('Error loading remote module', err)),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
