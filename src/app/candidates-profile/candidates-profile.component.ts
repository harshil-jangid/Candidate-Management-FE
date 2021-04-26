import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-candidates-profile',
  templateUrl: './candidates-profile.component.html',
  styleUrls: ['./candidates-profile.component.css']
})
export class CandidatesProfileComponent implements OnInit {

  title = 'candidate-platform';
  public candidates: Candidate[] = [];

  editCandidate!: Candidate;
  deleteCurrCandidate!: Candidate;
  
  noResults=false;
  constructor(
    public socialAuthServive: SocialAuthService,
    private router: Router,
    private candidateService: CandidateService
    ) {}

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

  public onDeleteCandidate(candidateId: number, deletedById: string): void {
    this.candidateService.deleteCandidate(candidateId,deletedById).subscribe(
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
  
  public searchCandidates(key: string):void{
    const results: Candidate[]=[];
    for(const candidate of this.candidates){
      if(candidate.name.toLowerCase().indexOf(key.toLowerCase()) != -1
      || candidate.jobTitle.toLowerCase().indexOf(key.toLowerCase()) != -1
      || candidate.phone.toLowerCase().indexOf(key.toLowerCase()) != -1
      || candidate.joiningLocation.toLowerCase().indexOf(key.toLowerCase()) != -1
      || candidate.skill.toLowerCase().indexOf(key.toLowerCase()) != -1
      || candidate.collegeName.toLowerCase().indexOf(key.toLowerCase()) != -1){
        results.push(candidate);
        this.noResults=false;
      }
    }
    this.candidates = results;
    
    if(results.length === 0 && key){
      this.noResults=true;
    }else{
      this.getCandidates();
      this.noResults=false;
    }
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
