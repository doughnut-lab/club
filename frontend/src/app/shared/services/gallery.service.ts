import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  
  readonly baseURL=environment.appUrl+'/view_gallery';
  readonly baseURLCatogory=environment.appUrl+'/view_gallery_catogory/';
  catogory: String;
  foodList : Array<String> = [];

  constructor(private http: HttpClient) { }
  
  getFoodList(){
    return this.http.get(this.baseURL);
  }



  findfood(email:string){

  }

  getgallery(){

  }

  getFoodByCatogory(catogory){
    return this.http.get(this.baseURLCatogory+catogory);
  }

  setCatogory(catogory){
    this.catogory = catogory;
  }

  getCtogory(){
    return this.catogory;
  }

  addFoodArray(foodlist){
    this.foodList = foodlist;
  }

  getFoodArray(){
    return this.foodList;
  }
}








