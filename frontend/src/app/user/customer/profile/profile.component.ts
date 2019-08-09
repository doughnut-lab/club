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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  _id:String;
  table:Table;
  hall:Hall;
  swimmingpool:Swimmingpool;
  billiardtable:Billiardtable;
  reservstion:any;

  breakfast :Boolean = false;
  lunch :Boolean = false;
  dinner :Boolean = false;

  reserveddate :Date;
  bookingdate :Date;
  customername :String;
  time :String;
  contact :Number;
  foodlist :any;
  address :String;
  email :String;

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private tableService: TableService,
              private reservstionService: ReservationService,
              private reservationservice:ReservationService,
              private hallService:HallService,
              private swimmingpoolservice:SwimmingpoolService,
              private billiardtableservice:BilliardtableService
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

    // if(this.reservstion=='Table'){
    //   this.tableslot = [this.breakfast,this.lunch,this.dinner];
    // }else if(this.reservstion=='Hall'){
    //   this.hallslot = [this.slot1,this.slot2,this.slot3,this.slot4,this.slot5,this.slot6,this.slot7,this.slot8,this.slot9,this.slot10,this.slot11,this.slot12];
    // }else if(this.reservstion=='Swimming Pool'){
    //   this.tableslot = [this.slot1,this.slot2,this.slot3,this.slot4,this.slot5,this.slot6,this.slot7,this.slot8,this.slot9,this.slot10,this.slot11,this.slot12];
    // }else if(this.reservstion=='Billiard Table'){
    //   this.tableslot = [this.slot1,this.slot2,this.slot3,this.slot4,this.slot5,this.slot6,this.slot7,this.slot8,this.slot9,this.slot10,this.slot11,this.slot12];
    // }else{
    //   this.tableslot = ["false","false","false"];
    //   this.hallslot = ["false","false","false","false","false","false","false","false","false","false","false","false"];
    //   this.swimmingpoolslot = ["false","false","false","false","false","false","false","false","false","false","false","false"];
    //   this.billiardtableslot = ["false","false","false","false","false","false","false","false","false","false","false","false"];
    // }

  //   var body = {
  //     amount :this.amount,
  //     reserveddate :"",
  //     bookingdate :this.bookingdate,
  //     starttime :this.starttime,
  //     endtime :this.endtime,
  //     status :"not completed",
  //     tablenumber :this.tablenumber,
  //     tableslot :this.tableslot,
  //     hallnumber :this.hallnumber,
  //     hallslot :this.hallslot,
  //     swimmingpoolnumber :this.swimmingpoolnumber,
  //     swimmingpoolslot :this.swimmingpoolslot,
  //     billiardtablenumber :this.billiardtablenumber,
  //     billiardtableslot :this.billiardtableslot,
  //     customername :this.customername,
  //     contact :this.contact,
  //     foodlist :"",
  //     address :"No.73,dampe,madapatha,piliyandala",
  //     email :this.email
  //   }
  //   console.log('submit_dk'+ body)
  //   this.reservationservice.addBooking(body).subscribe((result)=>{
  //     console.log('before result')
  //     if(result){
  //       console.log('in result'+ result)
  //       alert("booking success");
  //     }
  //   },
  //     (err) => {
  //       console.log(err.error)
  //     }
  //   )
  // }

  // if(this.breakfast=true){
  //   this.time = "breakfast";
  // }else if(this.lunch=true){
  //   this.time = "lunch";
  // } else {
  //   this.time = "dinner";
  // }

  var body = {

    reserveddate :"",
    bookingdate :this.bookingdate,
    customername :this.customername,
    breakfast :this.breakfast,
    lunch :this.lunch,
    dinner :this.dinner,
    contact :this.contact,
    foodlist :"",
    address :"this.address",
    email :this.email

      }
      console.log('submit_dk'+ body.breakfast +" "+ body.lunch +" "+ body.dinner)
      this.reservationservice.addBooking(body).subscribe((result)=>{
        console.log('before result')
        if(result){
          console.log('in result'+ result)
          alert("booking success");
        }
      },
        (err) => {
          console.log(err.error)
        }
      )
    }
  


}
