import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Hall } from '../models/hall.model';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  readonly url='http://localhost:3000/view_hall';
  readonly url2='http://localhost:3000/view_hall/';
  hall_id;

  constructor(private http: HttpClient) { }

  getHallList(){
    return this.http.get(this.url);
  }

  setHallId(id){
    this.hall_id = id;
  }

  getHallId(){
    return this.hall_id;
  }

  getHallById(){
    return this.http.get(this.url2+this.hall_id);
  }

}














