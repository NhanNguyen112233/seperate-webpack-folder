import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminLoadingService {
  private _loading = new BehaviorSubject<boolean>(false);

  get loading() {
    return this._loading;
  }

  show(nextState: boolean) {
    return this._loading.next(nextState);
  }
}
