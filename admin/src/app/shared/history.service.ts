import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { History } from './history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  static Email:string;
  selectHistory: History;
  history: History[];
  
  readonly baseURL='http://localhost:3000/view_person_history';
  readonly baseURL1='http://localhost:3000/view_history';
  constructor(private http: HttpClient) { }

  setEmail(email:string){
    console.log(email);
    HistoryService.Email=email;
    console.log(HistoryService.Email);
  }
  getEmail():string{
    return HistoryService.Email;
  }
  
  getHistoryList(instructor: string){
    //console.log(instructor);
    return this.http.get(this.baseURL1);
    
}
  getAssignList(instructor: string){
  console.log(instructor);
  return this.http.get(this.baseURL + `/${instructor}`);
  
}





}
