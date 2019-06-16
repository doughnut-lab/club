import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  selectInstructor: Instructor;
  instructor: Instructor[];
  readonly baseURL='http://localhost:3000/register_instructor';
  readonly baseURL1='http://localhost:3000/update_instructor';
  readonly baseURL2='http://localhost:3000/delete_instructor';
  readonly baseURL3='http://localhost:3000/view_instructor';
  readonly baseURL4='http://localhost:3000/user_ins_register';
  constructor(private http: HttpClient) { }

  userpostInstructor(ins: Instructor){
    return this.http.post(this.baseURL,ins);
}
  putInstructor(ins: Instructor) {
  return this.http.put(this.baseURL1 + `/${ins._id}`, ins);
}

  deleteInstructor(_id: string) {
  return this.http.delete(this.baseURL2 + `/${_id}`);
}
  getInstrutorList(){
  return this.http.get(this.baseURL3);
}
  userInstructor(ins: Instructor){
  return this.http.post(this.baseURL4,ins);
}

}
