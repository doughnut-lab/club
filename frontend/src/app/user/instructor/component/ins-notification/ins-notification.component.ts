import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';
import { Notification } from '../../../../shared/notification.model';
import { HistoryService } from '../../../../shared/history.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ins-notification',
  templateUrl: './ins-notification.component.html',
  styleUrls: ['./ins-notification.component.css'],
  providers:[NotificationService,HistoryService]
})
export class InsNotificationComponent implements OnInit {

  constructor(public UserProfileService: NotificationService,public UserService: HistoryService, private router: Router) { }

  ngOnInit() {
    this.NotificationList();
  }
  NotificationList()
  {  
      console.log(this.UserService.getEmail());
      this.UserProfileService.getNotificationList(this.UserService.getEmail()).subscribe((res)=> {
      this.UserProfileService.notification= res as Notification[];
      
      
    });
  }
  ondelete()
  {

  }

}


