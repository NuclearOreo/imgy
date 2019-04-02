import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ImgyApiService {

  private url = 'https://tranquil-hollows-33027.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getPost(username?:string) {
    if (username) {  return this.http.get(this.url + 'posts/' + username); }
    return this.http.get(this.url + 'posts');
  }

  geToken(email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'auth/login', {email, password}, {headers});
  }

  signUp(username: string, email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'users', {username, email, password}, {headers});
  }

  isLogin() {
    const token = localStorage.getItem('x-auth-token');
    if (!token) { return false; }
    return true;
  }

  getUser() {
    const token = localStorage.getItem('x-auth-token');
    const helper = new JwtHelperService();
    const decode = helper.decodeToken(token);
    return decode
  }

  logOut() {
    localStorage.removeItem('x-auth-token');
  }
  
}
