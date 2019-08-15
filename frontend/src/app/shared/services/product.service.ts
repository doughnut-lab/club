import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';
import { Orderproduct } from '../models/orderproduct.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectProduct: Product;
  product: Product[];
  selectOrder:Orderproduct;
  order:Orderproduct[];
 // namelist:string[];

  readonly baseURL='http://localhost:3000/enter_products';
  readonly baseURL1='http://localhost:3000/view_products';
  readonly baseURL2='http://localhost:3000/update_products';
  readonly baseURL3='http://localhost:3000/view_product_state';
  readonly baseURL4='http://localhost:3000/view_product';
  constructor(private http: HttpClient) { }

  productpost(namelist:string[]){
  console.log(namelist);
  //var myJsonString = JSON.stringify(ins);
  //console.log(myJsonString);
    return this.http.post(this.baseURL,namelist);
}

  getProduct(){
  return this.http.get(this.baseURL4);
}
getProduct1(){
  return this.http.get(this.baseURL1);
}
putProduct(ins: Orderproduct) {
  return this.http.put(this.baseURL2 + `/${ins._id}`, ins);
}
getproductList(state: string){
  //console.log(instructor);
  return this.http.get(this.baseURL3 + `/${state}`);
  
}
}
