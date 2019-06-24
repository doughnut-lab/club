import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notification } from '../../shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-no-cheff',
  templateUrl: './no-cheff.component.html',
  styleUrls: ['./no-cheff.component.css'],
  providers:[NotificationService]
})
export class NoCheffComponent implements OnInit {

  constructor(public UserProfileService:NotificationService,public tosatr :ToastrService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectNotification = {
      
      title :"",
      email : "",
      message:""
 }
}
  onSubmit(form : NgForm){
    this.UserProfileService.postCheffNotfication(form.value).subscribe(
      res=>{
      //  this.refreshNotificationList();
            this.resetForm(form);
            alert('sccess');
      },
      err=>{
        alert('error');
      }
    );
  }
  refreshNotificationList()
  {
    this.UserProfileService.getCheffNotificationList().subscribe((res)=> {
      this.UserProfileService.notification= res as Notification[];
    });
  }

}
