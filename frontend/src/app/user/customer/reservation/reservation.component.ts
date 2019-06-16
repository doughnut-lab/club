import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { Table } from 'src/app/shared/models/table.model';
// import { SwimmingpoolsService } from 'src/app/shared/services/swimmingpool.service';
// import { Table } from 'src/app/shared/models/table.model';
// import { TableService } from 'src/app/shared/services/table.service';
// import { Table } from 'src/app/shared/models/table.model';
// import { TableService } from 'src/app/shared/services/table.service';
// import { Table } from 'src/app/shared/models/table.model';

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

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTableList().subscribe((res)=> {
      this.tables= res as Table[];
    });
  }

}
