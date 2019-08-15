import { Component, OnInit } from '@angular/core';
import {  ProductService  } from '../../../../shared/services/product.service';
import {  Orderproduct } from '../../../../shared/models/orderproduct.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-completedorders',
  templateUrl: './completedorders.component.html',
  styleUrls: ['./completedorders.component.css']
})
export class CompletedordersComponent implements OnInit {
  state:string="complete";
  constructor(public UserProfileService:ProductService) { }

  ngOnInit() {
    this.OrderList();
  }
  OrderList()
  {  
      //console.log(this.UserProfileService.getEmail());
      this.UserProfileService.getproductList(this.state).subscribe((res)=> {
      this.UserProfileService.order= res as Orderproduct[];
      
      
    });
  }


}
