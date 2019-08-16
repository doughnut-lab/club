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
  readonly basecheckAvailability=environment.appUrl+'/checkAvailability';
  
  catogory: String;
  static foodList : Array<String> = [];

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
    GalleryService.foodList = foodlist;
  }

  getFoodArray(){
    return GalleryService.foodList;
  }

  checkAvailabilitySlot(){
    return this.http.get(this.basecheckAvailability);
  }
}








