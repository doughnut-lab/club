import { Component, OnInit,  Inject } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';
import { Booking } from 'src/app/shared/models/booking.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservationDetailsComponent } from '../reservation-details/reservation-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreservation',
  templateUrl: './viewreservation.component.html',
  styleUrls: ['./viewreservation.component.css']
})

export class ViewreservationComponent implements OnInit {

  bookinglist: Booking[];
  bookings: Booking ;

  
  

  p: number = 1;
  constructor(
    private bookingService: BookingService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.bookingService.getBookingList().subscribe((res)=> {
      this.bookinglist= res as Booking[];
    });
  }

  openDialog(id): void {
    this.bookingService.setBookingId(id);
    console.log('open');
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  changeState(ins:Booking){
    this.bookingService.updateBooking(ins).subscribe(
      res=>{},err=>{}
    );
  }

  // checked(ins:Booking) {
  //   var myLayer = document.getElementById(ins._id+"");

  //  if (ins.state=="close") {
  //       // myLayer.class = "submit";
  //       myLayer.removeAttribute("disabled");
  //  } else {
  //       // myLayer.class = "button:disabled";
  //       myLayer.setAttribute("disabled","disabled");
  //  };
// }

  

  
    

    

    

}