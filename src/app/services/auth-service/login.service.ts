import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  login(username:any, password:any) {
    return  this.http.post(`${this.apiUrl}/auth/login`, {
        username:username,
        password:password
    })
  }

// authenticated token

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }
}
