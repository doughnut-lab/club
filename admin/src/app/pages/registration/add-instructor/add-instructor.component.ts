import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../../shared/services/instructor.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Instructor } from '../../../shared/models/instructor.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
  providers:[InstructorService]
})
export class AddInstructorComponent implements OnInit {

  constructor(public UserProfileService:InstructorService,public tosatr :ToastrService) { }
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
      tel:null,
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
            this.tosatr.success('Saved successfully','Somiru');
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>');
              // this.serverErrorMessages = err.error.message;
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
  
  onEdit(ins : Instructor)
  { this.UserProfileService.selectInstructor=ins;

  }
  onDelete(_id: string,form: NgForm) {
    
    if (confirm('Are you sure to delete this record ?') == true) {
      
      this.UserProfileService.deleteInstructor(_id).subscribe((res) => {
        this.refreshInstructorList();
        this.resetForm(form);
        this.tosatr.success('Delete successfully','Somiru');
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
        this.tosatr.success('Update successfully','Somiru');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
          this.tosatr.warning(this.serverErrorMessages,'Somiru');
        }
        else
          this.serverErrorMessages = 'Something went wrong.';
      }
    );

  }
  
}
