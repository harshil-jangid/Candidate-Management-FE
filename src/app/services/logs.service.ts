import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logs } from '../models/logs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class LogsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}
 
  public getLogs(): Observable<Logs[]>{
    return this.http.get<Logs[]>(`${this.apiServerUrl}/audits`);
  }
}
