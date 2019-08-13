import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  urladdbooking = environment.appUrl+"/booking";
  readonly viewbooking = environment.appUrl+'/view_booking'; 

  constructor(private http: HttpClient) { }

  addBooking(data){
    return this.http.post(this.urladdbooking,data,{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getBookingList(){
    return this.http.get(this.viewbooking);
  }
  
}









