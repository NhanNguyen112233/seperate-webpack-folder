// Sharing modules requires that all remotes are initialized
// and can provide shared modules to the common scope
// As this is an async operation we need an async boundary (import())

import { initFederation } from '@angular-architects/module-federation';
import { enviroment } from './config/enviroment';
// this is ok
export async function loadManifest(): Promise<any> {
  try {
    const envManifest = enviroment.manifest;
    const response = await import(`./config/manifest.dev.json`);

    return response.default as {
      [key: string]: string | any;
    };
  } catch (err) {
    console.error('Error loading manifest', err);
    throw err;
  }
}

// function initInjection() {
//   let a;
//   try {
//     const injector = Injector.create({
//       providers: [
//         {
//           provide: AppService,
//           deps: [],
//         },
//       ],
//     });
//     console.log('injector.get(AppService)', injector.get(AppService));
//     a = injector.get(AppService);
//   } catch (err) {
//     console.log('Error creating injector', err);
//   }
// }
// Using modules from remotes is also an async operation
// as chunks need to be loaded for the code of the remote module
// This also requires an async boundary (import())

// At this point shared modules initialized and remote modules are loaded\

// async function loadManifest() {
//     try {
//       const manifest = await import(`../config/manifest.dev.json`);
//       typedManifest = manifest.default;
//       console.log('typedManifest', typedManifest);
//     } catch (err) {
//       console.error('Error loading manifest', err);
//     }
//   }
// Sharing modules requires that all remotes are initialized
// and can provide shared modules to the common scope
// As this is an async operation we need an async boundary (import())

// Using modules from remotes is also an async operation
// as chunks need to be loaded for the code of the remote module
// This also requires an async boundary (import())

// At this point shared modules initialized and remote modules are loaded\

// It's possible to place more code here to do stuff on page init
// but it can't use any of the shared modules or remote modules.

// It's possible to place more code here to do stuff on page init
// but it can't use any of the shared modules or remote modules.
// loadBoostrap()

// this is ok

loadManifest()
  .then((manifest) => {
    return initFederation(manifest);
  })
  .then(() => {
    return import('./boostrap').catch((err) => console.error(err));
  })
  .catch((err) => console.error('Error during initialization', err));

// import { Injector } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { initFederation } from '@angular-architects/module-federation';
// import { AppService } from './service/app-service.service';
// import { enviroment } from './config/enviroment';

// async function loadManifest(): Promise<any> {
//   try {
//     const envManifest = enviroment.manifest;
//     const response = await import(`./config/${envManifest}`);
//     return response.default as { readonly [key: string]: string | any };
//   } catch (err: any) {
//     console.error('Error loading manifest', err);
//   }
// }

// async function bootstrap() {
//   const manifest = await loadManifest();
//   initFederation(manifest);
//   const { bootstrap } = await import('./boostrap');

//   try {
//     bootstrap(manifest);
//   } catch (err) {
//     console.error('Error during initialization', err);
//   }
// }

// bootstrap();
