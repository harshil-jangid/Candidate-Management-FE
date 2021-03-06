import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { CandidatesProfileComponent } from './candidates-profile/candidates-profile.component';
import {AuthGuardService} from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { TrendsComponent } from './trends/trends.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogsComponent } from './logs/logs.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    CandidatesProfileComponent,
    TrendsComponent,
    LogsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    
    
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
  {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
