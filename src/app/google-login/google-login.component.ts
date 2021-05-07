import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
 
export class GoogleLoginComponent {
  user?: SocialUser;


  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private cookie: CookieService) { }

  
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   .then(() => this.router.navigate(['candidates']));;
  // }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
      this.user = user;
      this.cookie.set('token',user.authToken);
      this.cookie.set('currentUser',user.email);
      this.router.navigate(['candidates']);
    }).catch((err)=>{
      console.log("error to login")
    })
 }
}
