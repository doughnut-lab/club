import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';
import { Booking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-viewreservation',
  templateUrl: './viewreservation.component.html',
  styleUrls: ['./viewreservation.component.css']
})
export class ViewreservationComponent implements OnInit {

  bookinglist: Booking[];
  p: number = 1;
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookingService.getBookingList().subscribe((res)=> {
      console.log("in function")
      this.bookinglist= res as Booking[];
    });
  }

}
