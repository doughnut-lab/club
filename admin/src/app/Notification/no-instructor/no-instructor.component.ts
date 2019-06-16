import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/notification.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notification } from '../../shared/notification.model';

@Component({
  selector: 'app-no-instructor',
  templateUrl: './no-instructor.component.html',
  styleUrls: ['./no-instructor.component.css'],
  providers:[NotificationService]
})
export class NoInstructorComponent implements OnInit {

  constructor(public UserProfileService:NotificationService) { }

  ngOnInit() {
    //this.refreshNotificationList();
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
    this.UserProfileService.postInstructorNotfication(form.value).subscribe(
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
    this.UserProfileService.getInstrutorNotificationList().subscribe((res)=> {
      this.UserProfileService.notification= res as Notification[];
    });
  }

}
