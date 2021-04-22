import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialUser } from 'angularx-social-login';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';
import { GoogleLoginComponent } from './google-login/google-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {
   }
  
  ngOnInit(): void {
  }
}
