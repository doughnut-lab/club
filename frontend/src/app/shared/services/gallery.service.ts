import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  
  readonly baseURL=environment.appUrl+'/view_gallery';
  constructor(private http: HttpClient) { }
  
  getFoodList(){
    return this.http.get(this.baseURL);
  }



  findfood(email:string){

  }

  getgallery(){

  }
}








