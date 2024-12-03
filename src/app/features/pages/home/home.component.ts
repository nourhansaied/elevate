import { afterNextRender, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductsService } from '../../../../../projects/products/src/lib/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _httpClient:HttpClient ,private _productsService : ProductsService, @Inject(PLATFORM_ID) private platformId: Object ) {
    this.getProducts()
  }

  ngOnInit() {
   
  }
  getProducts() {
   if( isPlatformBrowser(this.platformId) ) {
    // this._productsService.addExam({}).subscribe(res=>{
    //   console.log(res);
      
    // })

    this._httpClient.get('/api/v1/exams').subscribe((data) => {
      console.log(data);
    });
   }
    
  }

}
