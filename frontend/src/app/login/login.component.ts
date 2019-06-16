import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';
import { HistoryService } from '../shared/history.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService,HistoryService]
  
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
        if(this.getType() =="instructor")
        {
        
        this.router.navigateByUrl('/instructor');
        this.HistoryService.setEmail(email);
        this.tosatr.success('Login sucsessfully','Instructor');
        
        //alert('sucess');
      }else if(this.getType() =="cheff"){
        //this.userService.setToken(res['token']);
        this.router.navigateByUrl('/cheff');
        this.HistoryService.setEmail(email);
        this.tosatr.success('Login sucsessfully','Cheff');
        
      }
      else if(this.getType() =="cashier"){
        //this.userService.setToken(res['token']);
        this.router.navigateByUrl('/cashier');
        this.HistoryService.setEmail(email);
        this.tosatr.success('Login sucsessfully','Cashier');
      }
      else{
        //this.userService.setToken(res['token']);
        this.router.navigateByUrl('/customer');
        this.HistoryService.setEmail(email);
        this.tosatr.success('Login sucsessfully','Customer');
      }
    },
      err => {
        this.serverErrorMessages = err.error.message;
        this.tosatr.warning(this.serverErrorMessages,'User');
        //alert('error');
      }
    );
  }
  
}
