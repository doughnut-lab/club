import { Component, OnInit,  Inject } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';
import { Booking } from 'src/app/shared/models/booking.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservationDetailsComponent } from '../reservation-details/reservation-details.component';

@Component({
  selector: 'app-viewreservation',
  templateUrl: './viewreservation.component.html',
  styleUrls: ['./viewreservation.component.css']
})

export class ViewreservationComponent implements OnInit {

  bookinglist: Booking[];
  p: number = 1;
  constructor(
    private bookingService: BookingService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.bookingService.getBookingList().subscribe((res)=> {
      this.bookinglist= res as Booking[];
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
      width: '250px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}



