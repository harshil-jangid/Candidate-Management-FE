import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';

import {
  GoogleLoginProvider,
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { CandidatesProfileComponent } from './candidates-profile/candidates-profile.component';
import {AuthGuardService} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    CandidatesProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('189708597523-qd75krq60qp9p1viv6hs11n88rgqgh8u.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
