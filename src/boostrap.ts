import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Injector } from '@angular/core';
import { AppService } from './service/app-service.service';

// export async function bootstrap(manifest: any) {
//   console.log('Injected manifest:', manifest);
//   const injector = await Injector.create({
//     providers: [{ provide: AppService, deps: [] }],
//   });

//   const appService = injector.get(AppService);
//   console.log('appService', appService);
//   appService.setManifestConfig(manifest).then(() => {
//     console.log('appservice', appService.getManifestConfig('mfe2'));

//     setTimeout(() => {
//       platformBrowserDynamic()
//         .bootstrapModule(AppModule)
//         .catch((err) => console.error(err));
//     }, 10000);
//   });
// }
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
