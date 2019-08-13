import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from '../shared/services/user.service';
import { HistoryService } from '../shared/services/history.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {

  constructor(public userService: UserService,private router : Router,public tosatr :ToastrService,private HistoryService:HistoryService) { }
  model ={
    username:'',
    email :'',
    password:'',
    type:'',
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
 // email:string;
  ngOnInit() {
  }
  getType():String {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = JSON.parse(atob(token.split('.')[1]));
      return userPayload.type;
    }
    else
      return null;
  } 

  onSubmit(email:string,form : NgForm){
   // this.email=title;
    console.log(email);
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        if(this.getType() =="admin")
        {
        this.router.navigateByUrl('/dashboard');
        this.tosatr.success('Login sucsessfully','Admin');
        }
        else{
          this.tosatr.error('Invalid user','Admin');
        }
    },
      err => {
        this.serverErrorMessages = err.error.message;
        this.tosatr.warning(this.serverErrorMessages,'Admin');
        //alert('error');
      }
    );
  }
}
