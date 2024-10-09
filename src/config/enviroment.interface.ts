export interface IEnv {
  production: boolean;
  apiUrl: string;
  manifest: string;
}

export interface IManifest {
  [key: string]: {
    remoteName: string;
    exposedModule: string;
  };
}
