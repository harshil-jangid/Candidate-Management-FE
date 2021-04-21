import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidate } from './candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'candidate-platform';
  public candidates: Candidate[] = [];
  editCandidate!: Candidate;
  deleteCurrCandidate!: Candidate;
  constructor(private candidateService: CandidateService) {}

  ngOnInit(){
    this.getCandidates();
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
