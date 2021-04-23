import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate';
import {GoogleLoginComponent} from '../google-login/google-login.component'
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-candidates-profile',
  templateUrl: './candidates-profile.component.html',
  styleUrls: ['./candidates-profile.component.css']
})
export class CandidatesProfileComponent implements OnInit {

  title = 'candidate-platform';
  public candidates: Candidate[] = [];


  TrendsOrCandidates: Boolean=false;
  TrendText:String="Trends";
  public trendOnOff():void{
    this.TrendsOrCandidates=!this.TrendsOrCandidates;
    if(this.TrendsOrCandidates)
    {
      this.TrendText="Candidates";
    }else{
      this.TrendText="Trends";
    }
  }

  editCandidate!: Candidate;
  deleteCurrCandidate!: Candidate;
  constructor(
    public socialAuthServive: SocialAuthService,
    private router: Router,
    private candidateService: CandidateService
    ) {}

    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Location'}
  
    ];

  ngOnInit(){
    this.getCandidates();
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['']));
  }

  public getCandidates(): void{
    this.candidateService.getCandidates().subscribe(
      (response: Candidate[])=>{
        this.candidates=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onAddCandidate(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.candidateService.addCandidate(addForm.value).subscribe(
      (response: Candidate) => {
        console.log(response);
        this.getCandidates();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteCandidate(candidateId: number): void {
    this.candidateService.deleteCandidate(candidateId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCandidates();
        // editForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // editForm.reset();
      }
    );
  }

  public onUpdateCandidate(candidate: Candidate): void {
    this.candidateService.updateCandidate(candidate).subscribe(
      (response: Candidate) => {
        console.log(response);
        this.getCandidates();
        // editForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // editForm.reset();
      }
    );
  }

  public onOpenModal(candidate: Candidate, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCandidateModal');
    }
    if (mode === 'edit') {
      this.editCandidate = candidate;
      button.setAttribute('data-target', '#updateCandidateModal');
    }
    if (mode === 'delete') {
      this.deleteCurrCandidate = candidate;
      button.setAttribute('data-target', '#deleteCandidateModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
