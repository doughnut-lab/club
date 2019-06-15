import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    username: '',
    email: '',
    password: '',
    type:'',
    
  };
  readonly baseURL='http://localhost:3000/authenticate';
  constructor(private http: HttpClient) { }
  login(authCredentials) {
    return this.http.post(this.baseURL, authCredentials);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  // getType():String {
  //   var token = localStorage.getItem('token');
  //   if (token) {
  //     var userPayload = JSON.parse(atob(token.split('.')[1]));
  //     return userPayload.type;
  //   }
  //   else
  //     return null;
  // } 
}
