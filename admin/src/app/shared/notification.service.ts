import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  selectNotification: Notification;
  notification: Notification[];
  readonly baseURL='http://localhost:3000/ins_no';
  readonly baseURL1='http://localhost:3000/view_ins_no';
  readonly baseURL2='http://localhost:3000/cheff_no';
  readonly baseURL3='http://localhost:3000/view_cheff_no';
  readonly baseURL4='http://localhost:3000/cashier_no';
  readonly baseURL5='http://localhost:3000/view_cashier_no';
  constructor(private http: HttpClient) { }

  postInstructorNotfication(ins: Notification){
    return this.http.post(this.baseURL,ins);
}
  getInstrutorNotificationList(){
  return this.http.get(this.baseURL1);
}
postCheffNotfication(ins: Notification){
  return this.http.post(this.baseURL2,ins);
}
getCheffNotificationList(){
return this.http.get(this.baseURL3);
}
postCashierNotfication(ins: Notification){
  return this.http.post(this.baseURL4,ins);
}
getCashierNotificationList(){
return this.http.get(this.baseURL5);
}
}
