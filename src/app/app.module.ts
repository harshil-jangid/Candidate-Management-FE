import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';

import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { CandidatesProfileComponent } from './candidates-profile/candidates-profile.component';
import {AuthGuardService} from './auth-guard.service';
import { RouterModule } from '@angular/router';
import { TrendsComponent } from './trends/trends.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    CandidatesProfileComponent,
    TrendsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: GoogleLoginComponent},
      {path: 'candidates', component: CandidatesProfileComponent, canActivate: [AuthGuardService]},
      // {path: '**', component: GoogleLoginComponent},
      {path: 'trends', component: TrendsComponent}

    ]),
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    
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
