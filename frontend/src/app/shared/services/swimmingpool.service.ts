import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Swimmingpool } from '../models/swimmingpool.model';

const urlupdate = environment.appUrl+"/update_swimmingpool/";
const urldelete = environment.appUrl+"/delete_swimmingpool/";

@Injectable({
  providedIn: 'root'
})

export class SwimmingpoolService {

  readonly url=environment.appUrl+'/view_swimmingpool';
  readonly url2=environment.appUrl+'/view_swimmingpool/';
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

  updateSwimmingpool(data){
    return this.http.put(urlupdate+this.swimmingpool_id,data)
  }

  deleteSwimmingpool(){
    return this.http.delete(urldelete+this.swimmingpool_id)
  }
  
}

