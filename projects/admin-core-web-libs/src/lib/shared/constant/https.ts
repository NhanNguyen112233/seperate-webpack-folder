import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
export interface IAdminHttpOptions {

    headers?: HttpHeaders | {
  
      [header: string]: string | string[];
  
    };
  
    observe?: 'body'; // Ensure observe is compatible with the expected type
  
    context?: HttpContext;
  
    params?: HttpParams | {
  
      [param: string]: string | string[];
  
    };
  
    reportProgress?: boolean;
  
    responseType?: 'json';
  
    withCredentials?: boolean;
  
    transferCache?: boolean;
  
  }
  