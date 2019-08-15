import { Component, OnInit, Inject } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';
import { Booking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  bookings: Booking ;
  bookingId: String;
  time: String;

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.bookingId = this.bookingService.getBookimgId();
    this.bookingService.findBookingDetails(this.bookingId).subscribe((res)=> {
      this.bookings= res as Booking;
    });

    if(this.bookings.breakfast){
      this.bookings.time="Breakfast";
    }else if(this.bookings.lunch){
      this.bookings.time="Lunch";
    }else{
      this.bookings.time="Dinner";
    }
    console.log(this.bookings.time);
  }




}





