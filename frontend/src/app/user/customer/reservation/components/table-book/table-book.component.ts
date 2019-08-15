import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { ReservationService } from 'src/app/shared/services/reservation.service';
import { Table } from 'src/app/shared/models/table.model';
import { SwimmingpoolService } from 'src/app/shared/services/swimmingpool.service';
import { Swimmingpool } from 'src/app/shared/models/swimmingpool.model';
import { HallService } from 'src/app/shared/services/hall.service';
import { Hall } from 'src/app/shared/models/hall.model';
import { BilliardtableService } from 'src/app/shared/services/billiardtable.service';
import { Billiardtable } from 'src/app/shared/models/billiardtable.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TablemenuComponent} from '../tablemenu/tablemenu.component';
var today = new Date();
@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})
export class TableBookComponent implements OnInit {

  
  _id:String;
  table:Table;
  // tables: any;
  hall:Hall;
  swimmingpool:Swimmingpool;
  billiardtable:Billiardtable;
  reservstion:any;

  customername :String;
  breakfast :Boolean = false;
  lunch :Boolean = false;
  dinner :Boolean = false;
  contact :Number;
  foodlist :any;
  address :String;
  email :String;
  reserveddate :Date;
  bookingdate :Date = today;

  tableno : any;
  state: String = "Open";
  price : Number = 1000;
  ispaid : Boolean;
  
  time :String;
  
  

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  urltable          = environment.appUrl+"/images/table/";

  constructor(private tableService: TableService,
              private reservstionService: ReservationService,
              private reservationservice:ReservationService,
              private hallService:HallService,
              private swimmingpoolservice:SwimmingpoolService,
              private billiardtableservice:BilliardtableService,
              private router: Router,
              public dialog: MatDialog
              ) { }

  ngOnInit() {
    this._id = this.tableService.getTableId();
    this.reservstion = this.reservstionService.getSelectedCategory();

    if(this.reservstion=='Table'){
      this.tableService.getTableById().subscribe((res)=> {
        this.table= res as Table;
      });
    }else if(this.reservstion=='Hall'){
      this.hallService.getHallById().subscribe((res)=> {
        this.hall= res as Hall;
      });
    }else if(this.reservstion=='Swimming Pool'){
      this.swimmingpoolservice.getSwimmingpoolById().subscribe((res)=> {
        this.swimmingpool= res as Swimmingpool;
      });
    }else{
      this.billiardtableservice.getBilliardtableById().subscribe((res)=> {
        this.billiardtable= res as Billiardtable;
      });
    }
  }



addbooking(){

  var body = {
    customername :this.customername,
    breakfast :this.breakfast,
    lunch :this.lunch,
    dinner :this.dinner,
    contact :this.contact,
    foodlist :this.foodlist,
    address :this.address,
    email :this.email,
    reserveddate :this.reserveddate,
    bookingdate :this.bookingdate,
    tableno :this.table.tablenumber,
    state :this.state,
    price:this.price,
    ispaid :false,
  }

  console.log('submit_dk'+ body.breakfast +" "+ body.lunch +" "+ body.dinner)
  this.reservationservice.addBooking(body).subscribe((result)=>{
      console.log('before result')
      if(result){
        console.log('in result'+ result)
        alert("booking success");
        this.router.navigateByUrl('/payment');
      }
  },
    (err) => {
      console.log(err.error)
    }
  )}


  gotoMenu(){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TablemenuComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}





