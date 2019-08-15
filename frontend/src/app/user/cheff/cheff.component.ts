import { Component, OnInit } from '@angular/core';
import {  ProductService  } from '../../shared/services/product.service';
import {  Orderproduct } from '../../shared/models/orderproduct.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css'],
  providers: [ProductService]
})
export class CheffComponent implements OnInit {
  state:string="complete";
  constructor(public UserProfileService:ProductService) { }

  ngOnInit() {
    this.refreshCashierList();
    //this.AssignList();
  }
  refreshCashierList()
  {
    this.UserProfileService.getProduct1().subscribe((res)=> {
      this.UserProfileService.order= res as Orderproduct[];
    });
  }
  onAccept(ins:Orderproduct){ 
  this.UserProfileService.putProduct(ins).subscribe(
    res => {
      alert("success");
      
     // this.tosatr.success('Update successfully','Somiru');
    },
    err => {
     
    }
  );

}
AssignList()
  {  
      //console.log(this.UserProfileService.getEmail());
      this.UserProfileService.getproductList(this.state).subscribe((res)=> {
      this.UserProfileService.order= res as Orderproduct[];
      
      
    });
  }

}
