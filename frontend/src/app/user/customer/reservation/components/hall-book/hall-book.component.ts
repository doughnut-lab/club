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
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

var today = new Date();
@Component({
  selector: 'app-hall-book',
  templateUrl: './hall-book.component.html',
  styleUrls: ['./hall-book.component.css']
})
export class HallBookComponent implements OnInit {

  
  _id:String;
  customername :String;
  day :Boolean = false;
  night :Boolean = false;
  contact :Number;
  address :String;
  email :String;
  reserveddate :Date = today;
  bookingdate :Date;
  hallno:Number;
  state: String = "open";
  price: Number;
  ispaid: Boolean = false;
  
  table:Table;
  
  hall:Hall;
  swimmingpool:Swimmingpool;
  billiardtable:Billiardtable;
  reservstion:any;

  bookingtype : String = "Hall";
  
  time :String;
  
  urltable          = environment.appUrl+"/images/hall/";

  constructor(
              private tableService: TableService,
              private reservstionService: ReservationService,
              private reservationservice:ReservationService,
              private hallService:HallService,
              private swimmingpoolservice:SwimmingpoolService,
              private billiardtableservice:BilliardtableService,
              private router: Router
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
      day :this.day,
      night :this.night,
      contact :this.contact,
      address :this.address,
      email :this.email,
      reserveddate :this.reserveddate,
      bookingdate :this.bookingdate,
      hallno :this.hall.hallnumber,
      state :this.state,
      price:this.price,
      ispaid :false,
      bookingtype : this.bookingtype,
    }
  
    
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
  

}
