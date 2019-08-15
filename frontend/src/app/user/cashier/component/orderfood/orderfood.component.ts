import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Product } from '../../../../shared/models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.css'],
  providers:[ProductService]
})
export class OrderfoodComponent implements OnInit {
  quantity:number[]=[];
  prices:number[]=[];
  totalprice:number=0;
  namelist:string[]=[];
  

  constructor(public UserProfileService:ProductService,public tosatr :ToastrService) { 
    
  }
  // model ={
  //   quantity:'',
  // };

  ngOnInit() {
    this.refreshProductList();
  }
  refreshProductList()
  {
    this.UserProfileService.getProduct().subscribe((res)=> {
      this.UserProfileService.product= res as Product[];
    });
  }
  onOrder(){
    this.UserProfileService.productpost(this.namelist).subscribe(
      res=>{
        this.tosatr.success('Ordered successfully','Somiru');
       
        location.reload(true);
       
      },
      err=>{
        //alert('error');
      }
    )

  }
  onClick(prize:number,name:string,quantity:number){
    console.log(quantity);
    this.prices.push(prize);
    this.namelist.push(name);
   // this.totalprice=this.totalprice+(prize*(this.model.quantity));
   this.totalprice=this.totalprice+(prize*quantity);
  }
  onDelete(){

  }
 
}
