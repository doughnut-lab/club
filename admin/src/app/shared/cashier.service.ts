import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cashier } from './cashier.model';

@Injectable({
  providedIn: 'root'
})
export class CashierService {
  selectCashier: Cashier;
  cashier: Cashier[];
  readonly baseURL='http://localhost:3000/register_cashier';
  readonly baseURL1='http://localhost:3000/update_cashier';
  readonly baseURL2='http://localhost:3000/delete_cashier';
  readonly baseURL3='http://localhost:3000/view_cashier';
  readonly baseURL4='http://localhost:3000/user_cashier_register';
  constructor(private http: HttpClient) { }
  userpostCashier(ins: Cashier){
    return this.http.post(this.baseURL,ins);
}
  putCashier(ins: Cashier) {
  return this.http.put(this.baseURL1 + `/${ins._id}`, ins);
}

  deleteCashier(_id: string) {
  return this.http.delete(this.baseURL2 + `/${_id}`);
}
  getCashierList(){
  return this.http.get(this.baseURL3);
}
  userCashier(ins: Cashier){
  return this.http.post(this.baseURL4,ins);
}
}
