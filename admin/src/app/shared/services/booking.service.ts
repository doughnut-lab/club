import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Booking } from '../models/booking.model';

const urladdbooking = "localhost:3000/booking"; 

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addBooking(data){
    return this.http.post(urladdbooking,data,{
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
