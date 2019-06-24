import { Component, OnInit, Input } from '@angular/core';
import { HistoryService } from '../../../../shared/services/history.service';
//import { UserService } from '../../../../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { History } from '../../../../shared/models/history.model';
//import { LoginComponent } from '../../../../login/login.component'

@Component({
  selector: 'app-ins-history',
  templateUrl: './ins-history.component.html',
  styleUrls: ['./ins-history.component.css'],
  providers:[HistoryService]
})

export class InsHistoryComponent implements OnInit {
   
  constructor(public UserProfileService: HistoryService, private router: Router) { }
  //title:string;
  
  ngOnInit() {
     
    this.HistoryList();
  }
  
  HistoryList()
  {  
     
      console.log(this.UserProfileService.getEmail());
      this.UserProfileService.getHistoryList(this.UserProfileService.getEmail()).subscribe((res)=> {
      this.UserProfileService.history= res as History[];
      
      
    });
  }
  onDelete()
  {

  }

}
