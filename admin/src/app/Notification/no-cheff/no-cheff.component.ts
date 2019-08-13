import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notification } from '../../shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';
import { CheffService } from '../../shared/services/cheff.service';
import { Cheff } from '../../shared/models/cheff.model';

@Component({
  selector: 'app-no-cheff',
  templateUrl: './no-cheff.component.html',
  styleUrls: ['./no-cheff.component.css'],
  providers:[NotificationService]
})
export class NoCheffComponent implements OnInit {

  constructor(public UserProfileService:NotificationService,public tosatr :ToastrService,public CheffService:CheffService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.refreshCheffList();
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectNotification = {
      
      title :"",
      tel:null,
      message:""
 }
}
  onSubmit(form : NgForm){
    this.UserProfileService.postCheffNotfication(form.value).subscribe(
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
    this.UserProfileService.getCheffNotificationList().subscribe((res)=> {
      this.UserProfileService.notification= res as Notification[];
    });
  }
  refreshCheffList()
  {
    this.CheffService.getCheffList().subscribe((res)=> {
      this.CheffService.ceff= res as Cheff[];
    });
  }
  onEdit(ins : Cheff)
  { this.CheffService.selectCheff=ins;

  }

}
