import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cheff } from './cheff.model';

@Injectable({
  providedIn: 'root'
})
export class CheffService {
  selectCheff: Cheff;
  ceff: Cheff[];
  readonly baseURL='http://localhost:3000/register_cheff';
  readonly baseURL1='http://localhost:3000/update_cheff';
  readonly baseURL2='http://localhost:3000/delete_cheff';
  readonly baseURL3='http://localhost:3000/view_cheff';
  readonly baseURL4='http://localhost:3000/user_cheff_register';
  constructor(private http: HttpClient) { }
  userpostCheff(ins: Cheff){
    return this.http.post(this.baseURL,ins);
}
  putCheff(ins: Cheff) {
  return this.http.put(this.baseURL1 + `/${ins._id}`, ins);
}

  deleteCheff(_id: string) {
  return this.http.delete(this.baseURL2 + `/${_id}`);
}
  getCheffList(){
  return this.http.get(this.baseURL3);
}
  userCheff(ins: Cheff){
  return this.http.post(this.baseURL4,ins);
}



}
