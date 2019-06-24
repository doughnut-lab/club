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

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(private tableService: TableService,
              private reservstionService: ReservationService,
              private reservationservice:ReservationService,
              private hallService:HallService,
              private swimmingpoolservice:SwimmingpoolService,
              private billiardtableservice:BilliardtableService
              ) { }

  ngOnInit() {
    // this._id = this.tableService.getTableId();
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


}
