import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Swimmingpool } from '../models/swimmingpool.model';

@Injectable({
  providedIn: 'root'
})

export class SwimmingpoolService {

  readonly url='http://localhost:3000/view_swimmingpool';
  readonly url2='http://localhost:3000/view_swimmingpool/';
  swimmingpool_id;

  constructor(private http: HttpClient) { }

  getSwimmingpoolList(){
    return this.http.get(this.url);
  }

  setSwimmingpoolId(id){
    this.swimmingpool_id = id;
  }

  getSwimmingpoolId(){
    return this.swimmingpool_id;
  }

  getSwimmingpoolById(){
    return this.http.get(this.url2+this.swimmingpool_id);
  }
  
}

