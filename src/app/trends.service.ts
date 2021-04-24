import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getLocation() {
    return this.http.get(this.apiServerUrl + '/trends/location');
  }

  public getSkills() {
    return this.http.get(this.apiServerUrl + '/trends/skills');
  }

}
