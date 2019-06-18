import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../../../shared/services/reservation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  category;
  constructor(private reservationservice:ReservationService) { }

  ngOnInit() {
  }

  setCategory(){
    console.log(this.category);
    this.reservationservice.setSelectedCategory(this.category);
  }

}
