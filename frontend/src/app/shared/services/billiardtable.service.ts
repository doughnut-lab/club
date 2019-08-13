import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Billiardtable } from '../models/billiardtable.model';

const urlupdate = environment.appUrl+"/update_billiardtable/";
const urldelete = environment.appUrl+"/delete_billiardtable/";

@Injectable({
  providedIn: 'root'
})

export class BilliardtableService {

  readonly url=environment.appUrl+'/view_billiardtable';
  readonly url2=environment.appUrl+'/view_billiardtable/';
  billiardtable_id;

  constructor(private http: HttpClient) { }

  getBilliardtableList(){
    return this.http.get(this.url);
  }

  setbilliardid(id){
    this.billiardtable_id = id;
  }

  getBilliardtableId(){
    return this.billiardtable_id;
  }

  getBilliardtableById(){
    return this.http.get(this.url2+this.billiardtable_id);
  }

  updateBilliardtable(data){
    return this.http.put(urlupdate+this.billiardtable_id,data)
  }

  deleteBilliardtable(){
    return this.http.delete(urldelete+this.billiardtable_id)
  }

}