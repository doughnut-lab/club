import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  static Email:string;
  selectHistory: History;
  history: History[];
  
  readonly baseURL='http://localhost:3000/view_person_history';
  readonly baseURL1='http://localhost:3000/view_history';
  constructor(private http: HttpClient) { }
  
  getFoodList(){
    return this.http.get(this.baseURL1);
  }

  // getAssignList(instructor: string){
  //   console.log(instructor);
  //   return this.http.get(this.baseURL + `/${instructor}`);
  // }

findfood(email:string){

}

getgallery(){

}





}
