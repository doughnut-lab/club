import { Component, OnInit } from '@angular/core';
import { CashierService } from '../../../shared/services/cashier.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Cashier } from '../../../shared/models/cashier.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-cashier',
  templateUrl: './add-cashier.component.html',
  styleUrls: ['./add-cashier.component.css'],
  providers:[CashierService]
})
export class AddCashierComponent implements OnInit {

  constructor(public UserProfileService:CashierService,public tosatr :ToastrService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.refreshCashierList();
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectCashier = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userCashier(form.value).subscribe(
      res=>{
        this.UserProfileService.userpostCashier(form.value).subscribe(
          res => {
            this.refreshCashierList();
            this.resetForm(form);
            this.tosatr.success('Saved successfully','Somiru');
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>');
              this.tosatr.warning(this.serverErrorMessages,'Somiru');
            }
            else
            this.serverErrorMessages = err.error.message;
            this.tosatr.warning(this.serverErrorMessages,'Somiru');
          }
        );
        // alert('success');
      },
      err=>{
        this.serverErrorMessages = err.error.message;
        this.tosatr.warning(this.serverErrorMessages,'Somiru');
      }
    )
    
  }
  onEdit(ins : Cashier)
  { this.UserProfileService.selectCashier=ins;

  }
  onDelete(_id: string,form: NgForm) {
    
    if (confirm('Are you sure to delete this record ?') == true) {
      
      this.UserProfileService.deleteCashier(_id).subscribe((res) => {
        this.refreshCashierList()
        this.resetForm(form);
        this.tosatr.success('Delete successfully','Somiru');
      });
      
    }
  }
  refreshCashierList()
  {
    this.UserProfileService.getCashierList().subscribe((res)=> {
      this.UserProfileService.cashier= res as Cashier[];
    });
  }

  onUpdate(form : NgForm){
    this.UserProfileService.putCashier(form.value).subscribe(
      res => {
        
        this.refreshCashierList();
        this.resetForm(form);
        this.tosatr.success('Update successfully','Somiru');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.';
      }
    );

  }
}