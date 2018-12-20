import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInter } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loaded = true;
  products: ProductInter[] = [];
  productsFiltered: ProductInter[] = [];

  constructor( private http: HttpClient) {
    this.ProductsService();
   }

   private ProductsService(){

    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-portfolio-7287a.firebaseio.com/products_idx.json')
        .subscribe((resp: ProductInter[] ) => {
          this.products = resp;
          this.loaded = false;
          resolve();
        });      
    });

   }
   loadDetails( id:string ){
     return this.http.get(`https://angular-portfolio-7287a.firebaseio.com/products/${ id }.json`);

   }
   searchItems(searchParam: string){

    if(this.products.length === 0){
      this.ProductsService().then( ()=>{
        this.filterItems(searchParam);
      });
    } else {
      this.filterItems(searchParam);
    }

    // this.productsFiltered = this.products.filter(product => {
    //     return true;
    // })
    // console.log(this.productsFiltered);
   }

   private filterItems( searchParam: string){
    this.productsFiltered = [];
    searchParam = searchParam.toLocaleLowerCase();

    this.products.forEach( prod =>{

      const titleLowerCase = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf(searchParam) >= 0 || titleLowerCase.indexOf(searchParam) >= 0 ){
        
        this.productsFiltered.push( prod );
        console.log(this.productsFiltered);


      }
    });
    // console.log(this.products);
   }
}
