import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductEndPOints } from './enums/productEndPoints';
import { ProductAPI } from './base/product-api';
import { ProductAdapter } from './adapter/product-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ProductAPI {

  constructor(private _httpClient: HttpClient,private _productAdapter: ProductAdapter) { }

 
   addExam(exam: any): Observable<any> {
    console.log(ProductEndPOints.ADD_EXAM,"ProductEndPOints.ADD_EXAM");
    
    return this._httpClient.get(ProductEndPOints.ADD_EXAM).pipe(
      map(res => this._productAdapter.adapt(res)), catchError(err => of([]))
    )
  }
}
