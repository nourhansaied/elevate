import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class QueryServiveService {

  constructor(private httpClient: HttpClient) { }

  public getLocal(path: string): Observable<any> {
    return this.httpClient
      .get(`./assets/${path}`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
