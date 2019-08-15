import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../shared/services/customer.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[CustomerService]
})
export class SignupComponent implements OnInit {

  constructor(public UserProfileService:CustomerService,public tosatr :ToastrService,private router:Router) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form : NgForm){
    this.UserProfileService.postCustomer(form.value).subscribe(
      res=>{
        this.UserProfileService.userpostCustomer(form.value).subscribe(
          res => {
            
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
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectCustomer = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      tel:null,
      password:""
       }
    
  }

}
