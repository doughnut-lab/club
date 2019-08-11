import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  selectNotification: Notification;
  notification: Notification[];

  readonly baseURL=environment.appUrl+'/view_instructor_notification';
  constructor(private http: HttpClient) { }

  getNotificationList(email: string){
    
    return this.http.get(this.baseURL + `/${email}`);
}
}
