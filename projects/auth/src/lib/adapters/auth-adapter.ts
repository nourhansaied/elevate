import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthAdapter implements Adapter {

  constructor() { }

  adapt(data:any) {
    return data
  }
}
