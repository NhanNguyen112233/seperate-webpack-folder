import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { AppService } from '../service/app-service.service';
import { loadRemoteModuleWithManifest } from '@utils/manifest-loader';

const routes: Routes = [
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModuleWithManifest('mfe2')
        .then((m) => m.MfeComponentModule)
        .catch((err) => console.error('Error loading remote module', err)),
  },
  {
    path: 'mfe3',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ModuleFirst',
      })
        .then((m) => m.Mfe2ComponentModule)
        .catch((err) => console.error('Error loading remote module', err)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppService],
})
export class AppRoutingModule {}
