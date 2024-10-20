import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export interface AdminEvent{
  event:string;
  data:string;
}
@Injectable({
  providedIn: 'root'
})
export class AdminCommunicateService {
  private adminEvent = new Subject<AdminEvent>();
  constructor() { }

  getEvent():Observable<AdminEvent>{
    return this.adminEvent;
  }

  emmitEvent({event,data}:AdminEvent){
    this.adminEvent.next({ event, data });
  }
}
