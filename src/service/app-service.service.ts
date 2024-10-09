import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IManifest {
  [key: string]: {
    remoteEntry: string;
    exposedModule: string;
    remoteName: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AppService {}
