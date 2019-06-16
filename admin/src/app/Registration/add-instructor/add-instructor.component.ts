import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../shared/instructor.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Instructor } from '../../shared/instructor.model';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
  providers:[InstructorService]
})
export class AddInstructorComponent implements OnInit {

  constructor(public UserProfileService:InstructorService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.refreshInstructorList();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectInstructor = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userInstructor(form.value).subscribe(
      res=>{
        this.UserProfileService.userpostInstructor(form.value).subscribe(
          res => {
            this.refreshInstructorList();
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
  
  onEdit(ins : Instructor)
  { this.UserProfileService.selectInstructor=ins;

  }
  onDelete(_id: string,form: NgForm) {
    
    if (confirm('Are you sure to delete this record ?') == true) {
      
      this.UserProfileService.deleteInstructor(_id).subscribe((res) => {
        this.refreshInstructorList();
        this.resetForm(form);
       //form.reset();
      });
      
    }
  }
  refreshInstructorList()
  {
    this.UserProfileService.getInstrutorList().subscribe((res)=> {
      this.UserProfileService.instructor= res as Instructor[];
    });
  }
  onUpdate(form : NgForm){
    this.UserProfileService.putInstructor(form.value).subscribe(
      res => {
        
        this.refreshInstructorList();
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
