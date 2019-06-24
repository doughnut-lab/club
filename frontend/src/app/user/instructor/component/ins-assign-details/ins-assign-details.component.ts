import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../../shared/services/history.service'
import { History } from '../../../../shared/models/history.model';

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
Accept(){

}
Cancel(){
  
}

}