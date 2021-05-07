import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesProfileComponent } from './candidates-profile/candidates-profile.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { LogsComponent } from './logs/logs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
    {path: '', component: GoogleLoginComponent},
    {path: 'candidates', component: CandidatesProfileComponent, canActivate: [AuthGuardService]},
    // {path: '**', component: GoogleLoginComponent},
    {path: 'trends', component: TrendsComponent, canActivate: [AuthGuardService]},
    {path: 'logs', component: LogsComponent, canActivate: [AuthGuardService]},
    {path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
