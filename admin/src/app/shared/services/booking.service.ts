import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Booking } from '../models/booking.model';

const updateBookingUrl = environment.appUrl+'/changeStatus/'; 
var booking:Booking;
@Injectable({
  providedIn: 'root'
})

export class BookingService {

  booking_id: String;

  urladdbooking = environment.appUrl+"/booking";
  readonly viewbooking = environment.appUrl+'/view_booking';
  readonly viewbookingById = environment.appUrl+'/view_booking/'; 
  

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

  findBookingDetails(id){
    return this.http.get(this.viewbookingById+id);
  }

  setBookingId(id){
    this.booking_id = id;
  }

  getBookimgId(){
    return this.booking_id;
  }

  updateBooking(ins:Booking){
    console.log(updateBookingUrl+ins._id);
    return this.http.put(updateBookingUrl+`/${ins._id}`,ins);
  }

  
  
}









