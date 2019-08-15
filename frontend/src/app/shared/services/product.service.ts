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
 // namelist:string[];

  readonly baseURL='http://localhost:3000/enter_products';
  readonly baseURL1='http://localhost:3000/view_product';

  constructor(private http: HttpClient) { }

  productpost(namelist:string[]){
  console.log(namelist);
  //var myJsonString = JSON.stringify(ins);
  //console.log(myJsonString);
    return this.http.post(this.baseURL,namelist);
}

  getProduct(){
  return this.http.get(this.baseURL1);
}
}
