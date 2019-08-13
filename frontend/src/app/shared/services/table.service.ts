import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Table } from '../models/table.model';

const urlupdate = environment.appUrl+'/update_table/';
const urldelete = environment.appUrl+'/delete_table/';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  readonly url=environment.appUrl+'/view_table';
  readonly url2=environment.appUrl+'/view_table/';
  
  id;
  constructor(private http: HttpClient) { }
  
  getTableList(){
    return this.http.get(this.url);
  }

  setTableId(id){
    this.id = id;
  }

  getTableId(){
    return this.id;
  }

  getTableById(){
    return this.http.get(this.url2+this.id);
  }

  updateTable(data){
    return this.http.put(urlupdate+this.id,data)
  }

  deleteTable(){
    return this.http.delete(urldelete+this.id)
  }
}





