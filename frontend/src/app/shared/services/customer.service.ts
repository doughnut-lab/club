import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  selectCustomer: Customer 
  customer: Customer[];
  readonly baseURL='http://localhost:3000/register_customer';
  readonly baseURL1='http://localhost:3000/register_user_customer';
  constructor(private http: HttpClient) { }
  userpostCustomer(ins: Customer){
    return this.http.post(this.baseURL1,ins);
}
  postCustomer(ins: Customer){
  return this.http.post(this.baseURL,ins);
}
}
