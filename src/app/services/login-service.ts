import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookie:CookieService,private http : HttpClient) { }
  subject = new BehaviorSubject<String>("");
  getToken(){
    return this.cookie.get('token');
  }

  logout(){
    this.cookie.delete('token');
    console.log("logged out");
  }
  login(user:any){
    return this.http.post(`http://localhost:8080/login`, user);
  }
  loggedIn(){
    return !!this.cookie.get('token');
  }

  getCurrentUser(){
    return this.cookie.get("currentUser");
  }
}