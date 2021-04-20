import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from './candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

    public getCandidates(): Observable<Candidate[]>{
        return this.http.get<Candidate[]>(`${this.apiServerUrl}/all`);
    }

    public addCandidate(candidate: Candidate): Observable<Candidate>{
        return this.http.post<Candidate>(`${this.apiServerUrl}/add`, candidate);
    }

    public updateCandidate(candidate: Candidate): Observable<Candidate>{
        return this.http.put<Candidate>(`${this.apiServerUrl}/update`, candidate);
    }

    public deleteCandidate(candidateId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${candidateId}`);
    }
}
