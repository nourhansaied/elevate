import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapter implements Adapter{

  adapt(data: any) {
    return data
  }

  
}
