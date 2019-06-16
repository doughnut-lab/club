import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { Table } from 'src/app/shared/models/table.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  _id:String;
  table:Table;
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this._id = this.tableService.getTableId();
    this.tableService.getTableById().subscribe((res)=> {
      this.table= res as Table;
    });
  }


}
