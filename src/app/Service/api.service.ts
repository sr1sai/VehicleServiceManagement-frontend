import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:5235/api/";

  // Get
  Get(url: string): Observable<any> {
    return this.http.get(url);
  }

  ValidateUser(username: string, password: string): Observable<boolean> {
    const validateUrl = `${this.url}Get/ValidateUser?username=${username}&password=${password}`;
    return this.http.get<boolean>(validateUrl);
  }
}
