import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:3000/api";

  //Get
  Get(url:string): Observable<any>{
    return this.http.get(url);
  }

  ValidateUser(username:string,password:string): Observable<boolean>{
    return this.Get(this.url+"Get/"+"ValidateUser?"+`username={$username}&password={$password}`);
  }

}
