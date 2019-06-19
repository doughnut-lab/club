import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Billiardtable } from '../models/billiardtable.model';

@Injectable({
  providedIn: 'root'
})

export class BilliardtableService {

  readonly url='http://localhost:3000/view_billiardtable';
  readonly url2='http://localhost:3000/view_billiardtable/';
  billiardtable_id;

  constructor(private http: HttpClient) { }

  getBilliardtableList(){
    return this.http.get(this.url);
  }

  setSwimmingpoolId(id){
    this.billiardtable_id = id;
  }

  getBilliardtableId(){
    return this.billiardtable_id;
  }

  getBilliardtableById(){
    return this.http.get(this.url2+this.billiardtable_id);
  }

}