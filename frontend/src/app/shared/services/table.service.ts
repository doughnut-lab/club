import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  readonly url='http://localhost:3000/view_table';
  readonly url2='http://localhost:3000/view_table/';
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
}





