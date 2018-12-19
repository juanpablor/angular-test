import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInter } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductInter[] = [];
  loaded = true;

  constructor( private http: HttpClient) {
    this.ProductsService();
   }

   private ProductsService(){
    this.http.get('https://angular-portfolio-7287a.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductInter[] ) => {
        this.products = resp;
        this.loaded = false;
        console.log(this.products);
      });
   }

}
