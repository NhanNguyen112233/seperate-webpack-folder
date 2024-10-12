import { loadRemoteModule } from '@angular-architects/module-federation';
import { enviroment } from '@config/enviroment'; // Ensure this alias is correct

export interface IManifest {
  [key: string]: {
    remoteEntry: string;
    exposedModule: string;
    remoteName: string;
    [key: string]: any;
  };
}

export async function loadManifest(
  finishedLoadCb?: (manifestResponse: IManifest | any) => any
): Promise<IManifest> {
  const env = enviroment;
  let resolver = new Promise<{ default: IManifest }>(async (rs, rj) => {
    try {
      if (!env.production) {
        rs(await import('@config/manifest.dev.json'));
      } else {
        rs(await import('@config/manifest.prod.json'));
      }
    } catch (e) {
      rj(e);
    }
  });

  return resolver
    .then((manifest) => {
      finishedLoadCb && finishedLoadCb(manifest.default);
      return manifest.default as IManifest;
    })
    .catch((e: any) => {
      console.error('Error loading manifest', e);
      throw e;
    });
}

export async function loadRemoteModuleWithManifest(remoteKey: string) {
  const remoteConfig = await loadManifest();
  if (!remoteConfig[remoteKey]) {
    throw new Error(`Configuration for ${remoteKey} not found in manifest`);
  }
  return loadRemoteModule({
    type: 'manifest',
    remoteName: remoteConfig[remoteKey].remoteName,
    exposedModule: remoteConfig[remoteKey].exposedModule,
  });
}
