import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthEndPoints } from './enum/authEndpoint';
import { AuthAdapter } from './adapters/auth-adapter';
import { AuthAPI } from './base/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthAPI {

  constructor(private _httpClient: HttpClient, private _authAdapter: AuthAdapter) { }

  login(userData:any): Observable<any> {
    return this._httpClient.post(AuthEndPoints.LOGIN,userData).pipe(
      map((res)=> this._authAdapter.adapt(res)), 
      catchError((err) => of([]))
    )
  }
}
