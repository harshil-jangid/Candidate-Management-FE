import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../models/candidate';
import { HttpClient } from '@angular/common/http';
import { LoginService} from './login-service'
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient,private loginService :LoginService) {}

    public getCandidates(): Observable<Candidate[]>{
        return this.http.get<Candidate[]>(`${this.apiServerUrl}/all`);
    }

    public addCandidate(candidate: Candidate): Observable<Candidate>{
        let currentUser = this.loginService.getCurrentUser();
        console.log(currentUser);
        return this.http.post<Candidate>(`${this.apiServerUrl}/add/${currentUser}`, candidate);
    }

    public updateCandidate(candidate: Candidate): Observable<Candidate>{
        let currentUser = this.loginService.getCurrentUser();
        console.log(currentUser);
        return this.http.put<Candidate>(`${this.apiServerUrl}/update/${currentUser}`, candidate);
    }

    public deleteCandidate(candidateId: number,deletedById: string): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${candidateId}/${deletedById}`);
    }
}
