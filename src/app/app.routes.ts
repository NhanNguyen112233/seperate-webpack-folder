import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { AppService, IManifest } from '../service/app-service.service';

export function loadRemoteModuleWithManifest(configKey: string) {
  return import('../config/manifest.dev.json')
    .then((manifest) => {
      const remoteConfig = manifest.default as IManifest;
      return loadRemoteModule({
        type: 'manifest',
        remoteName: remoteConfig[configKey]
          ? remoteConfig[configKey].remoteName
          : '',
        exposedModule: remoteConfig[configKey]
          ? remoteConfig[configKey].exposedModule
          : '',
      });
    })
    .catch((e) => console.error(e));
}

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
