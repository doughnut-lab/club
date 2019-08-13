import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../../../shared/services/food-order.service';
import { NgForm } from '@angular/forms';
import {} from '../../../shared/models/foodOrer.model';

@Component({
  selector: 'app-cheff-food-order',
  templateUrl: './cheff-food-order.component.html',
  styleUrls: ['./cheff-food-order.component.css'],
  providers:[FoodOrderService]
})
export class CheffFoodOrderComponent implements OnInit {
  food1s: string[]=['chicken','fish','vegitarian'];
  food2s: string[]=['koththu ','rice','parata'];
  sizes: string[]=['half','normal','large'];
  amounts: string[]=['1','2','3','4','5','6','7','8','9','10'];
  serverErrorMessages: string;

  constructor(public FoodOrderService:FoodOrderService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.FoodOrderService.postFoodOrder(form.value).subscribe(
      res=>{
        this.FoodOrderService.postFoodOrder(form.value).subscribe(
          res => {
            // this.refreshInstructorList();
            // this.resetForm(form);
            alert('sccess');
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>');
              alert(this.serverErrorMessages);
            }
            else
              this.serverErrorMessages = 'Something went wrong.';
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
}
