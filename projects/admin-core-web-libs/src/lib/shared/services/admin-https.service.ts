import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdminHttpOptions } from '../constant/https';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private http:HttpClient) { }

  get<T>(url: string, options?: IAdminHttpOptions) {
    return this.http.get<T>(url, options);
  }

  post<T, U = any>(url: string, body?: U, options?: IAdminHttpOptions) {
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body?:any, options?: IAdminHttpOptions) {
    return this.http.put<T>(url, body, options);
  }

  patch<T>(url: string, body?:any, options?: IAdminHttpOptions) {
    return this.http.patch<T>(url, body, options);
  }

  delete<T>(url: string, options?: IAdminHttpOptions) {
    return this.http.delete<T>(url, options);
  }
}
