import { Injectable } from '@angular/core';
import { FoodOrder } from '../models/foodOrer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {
  selectFoodOrder: FoodOrder;
  foodOrder: FoodOrder[];
  readonly baseURL='http://localhost:3000/add_foodOrder';
  readonly baseURL1='http://localhost:3000/update_foodOrder';
  readonly baseURL2='http://localhost:3000/view_foodOrder';
  readonly baseURL3='http://localhost:3000/delete_foodOrderByCheff';
 

  constructor(private http: HttpClient) { }

      postFoodOrder(fOrder: FoodOrder){
        return this.http.post(this.baseURL,fOrder);
    }
      putFoodOrder(fOrder: FoodOrder) {
        return this.http.put(this.baseURL1 + `/${fOrder._id}`, fOrder);
    }

      deleteFoodOrder(_id: string) {
        return this.http.delete(this.baseURL3 + `/${_id}`);
    }
      getFoodOrder(){
        return this.http.get(this.baseURL2);
    }

}
