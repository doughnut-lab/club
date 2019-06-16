import { Component, OnInit } from '@angular/core';
import { CheffService } from '../../shared/cheff.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Cheff } from '../../shared/cheff.model';

@Component({
  selector: 'app-add-cheff',
  templateUrl: './add-cheff.component.html',
  styleUrls: ['./add-cheff.component.css'],
  providers:[CheffService]
})
export class AddCheffComponent implements OnInit {

  constructor(public UserProfileService:CheffService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
    this.refreshCheffList();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectCheff = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userCheff(form.value).subscribe(
      res=>{
        this.UserProfileService.userpostCheff(form.value).subscribe(
          res => {
            this.refreshCheffList();
            this.resetForm(form);
            alert('sccess');
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>');
              alert(this.serverErrorMessages);
            }
            else
              //this.serverErrorMessages = 'Something went wrong.';
              alert('error');
          }
        );
        alert('success');
      },
      err=>{
        alert('error');
      }
    )
    
  }
  onEdit(ins : Cheff)
  { this.UserProfileService.selectCheff=ins;

  }
  onDelete(_id: string,form: NgForm) {
    
    if (confirm('Are you sure to delete this record ?') == true) {
      
      this.UserProfileService.deleteCheff(_id).subscribe((res) => {
        this.refreshCheffList()
        this.resetForm(form);
       //form.reset();
      });
      
    }
  }
  refreshCheffList()
  {
    this.UserProfileService.getCheffList().subscribe((res)=> {
      this.UserProfileService.ceff= res as Cheff[];
    });
  }

  onUpdate(form : NgForm){
    this.UserProfileService.putCheff(form.value).subscribe(
      res => {
        
        this.refreshCheffList();
        this.resetForm(form);
        alert("sucess");
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


