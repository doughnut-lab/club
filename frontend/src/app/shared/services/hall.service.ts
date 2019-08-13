import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Hall } from '../models/hall.model';

const urlupdate = environment.appUrl+"/update_hall/";
const urldelete = environment.appUrl+"/delete_hall/";

@Injectable({
  providedIn: 'root'
})
export class HallService {

  readonly url=environment.appUrl+'/view_hall';
  readonly url2=environment.appUrl+'/view_hall/';
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

  updateHall(data){
    return this.http.put(urlupdate+this.hall_id,data)
  }

  deleteHall(){
    return this.http.delete(urldelete+this.hall_id)
  }
}














