import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../../shared/history.service'
import { History } from '../../../../shared/history.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ins-assign-details',
  templateUrl: './ins-assign-details.component.html',
  styleUrls: ['./ins-assign-details.component.css'],
  providers:[HistoryService]
})
export class InsAssignDetailsComponent implements OnInit {

  constructor(public UserProfileService: HistoryService) { }

  ngOnInit() {
    this.AssignList()
  }



AssignList()
  {  
      console.log(this.UserProfileService.getEmail());
      this.UserProfileService.getAssignList(this.UserProfileService.getEmail()).subscribe((res)=> {
      this.UserProfileService.history= res as History[];
      
      
    });
  }
Accept(ins: History){
  this.UserProfileService.getaccept(ins).subscribe(
    res=>{
      console.log(ins);
      alert('sucess');
    },
    err=>{
      alert('error');
      // this.serverErrorMessages = err.error.message;
      // this.tosatr.warning(this.serverErrorMessages,'Somiru');
    }
  )

}
Cancel(ins: History){
  this.UserProfileService.getcancel(ins).subscribe(
    res=>{
      console.log(ins);
      alert('sucess');
    },
    err=>{
      alert('error');
      // this.serverErrorMessages = err.error.message;
      // this.tosatr.warning(this.serverErrorMessages,'Somiru');
    }
  )

}
}