import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const urladdbooking = environment.appUrl+"/booking"; 
@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  category:String;
  constructor(private http: HttpClient) { }

  setSelectedCategory(category){
    this.category=category;
  }

  getSelectedCategory(){
    return this.category;
  }

  addBooking(data){
    console.log('in addbooking  '+urladdbooking)
    return this.http.post(urladdbooking,data)
  }

}





