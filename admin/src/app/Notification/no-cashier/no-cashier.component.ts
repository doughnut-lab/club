import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Notification } from '../../shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';
import { CashierService } from '../../shared/services/cashier.service';
import { Cashier } from '../../shared/models/cashier.model';

@Component({
  selector: 'app-no-cashier',
  templateUrl: './no-cashier.component.html',
  styleUrls: ['./no-cashier.component.css'],
  providers:[NotificationService]
})
export class NoCashierComponent implements OnInit {

  constructor(public UserProfileService:NotificationService,public tosatr :ToastrService,public CashierService:CashierService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.refreshCashierList();
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
    this.UserProfileService.postCashierNotfication(form.value).subscribe(
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
    this.UserProfileService.getCashierNotificationList().subscribe((res)=> {
      this.UserProfileService.notification= res as Notification[];
    });
  }
  refreshCashierList()
  {
    this.CashierService.getCashierList().subscribe((res)=> {
      this.CashierService.cashier= res as Cashier[];
    });
  }

}
