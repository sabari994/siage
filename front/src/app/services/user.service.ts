import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:5000/api/login';

  constructor(private http: HttpClient) { }


  login(data: any) {
    return this.http.post<any>(this.baseUrl, data);
  }

}
