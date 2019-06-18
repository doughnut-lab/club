import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { Table } from 'src/app/shared/models/table.model';
import { SwimmingpoolService } from 'src/app/shared/services/swimmingpool.service';
import { Swimmingpool } from 'src/app/shared/models/swimmingpool.model';
import { HallService } from 'src/app/shared/services/hall.service';
import { Hall } from 'src/app/shared/models/hall.model';
import { BilliardtableService } from 'src/app/shared/services/billiardtable.service';
import { Billiardtable } from 'src/app/shared/models/billiardtable.model';
import { ReservationService } from 'src/app/shared/services/reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  p = 1;
  tables:any;
  halls:any;
  swimmingpools:any;
  billiardtables:any;
  selected:string;
  category;
  urltable="http://localhost:3000/images/table/";
  urlswimmingpool="http://localhost:3000/images/swimpool/";
  urlhall="http://localhost:3000/images/hall/";
  urlbilliardtable="http://localhost:3000/images/billiardtable/";
  constructor(private tableService: TableService,
              private reservationservice:ReservationService,
              private hallService:HallService,
              private swimmingpoolservice:SwimmingpoolService,
              private billiardtableservice:BilliardtableService
              ) { }

  ngOnInit() {
    this.tableService.getTableList().subscribe((res)=> {
      this.tables= res as Table[];
    });
    this.hallService.getHallList().subscribe((res)=> {
      this.halls= res as Hall[];
    });
    this.swimmingpoolservice.getSwimmingpoolList().subscribe((res)=> {
      this.swimmingpools= res as Swimmingpool[];
    });
    this.billiardtableservice.getBilliardtableList().subscribe((res)=> {
      this.billiardtables= res as Billiardtable[];
    });
  }

  setid(id){
    this.tableService.setTableId(id);
  }

  

}
