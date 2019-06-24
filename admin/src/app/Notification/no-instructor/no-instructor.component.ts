import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notification } from '../../shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-no-instructor',
  templateUrl: './no-instructor.component.html',
  styleUrls: ['./no-instructor.component.css'],
  providers:[NotificationService]
})
export class NoInstructorComponent implements OnInit {

  constructor(public UserProfileService:NotificationService,public tosatr :ToastrService) { }
  serverErrorMessages: string;
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
            this.tosatr.success('Message sent Successfully','Somiru');
      },
      err=>{
        this.serverErrorMessages = err.error.message;
        this.tosatr.warning(this.serverErrorMessages,'Somiru');  
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
