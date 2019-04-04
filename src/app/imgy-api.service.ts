import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ImgyApiService {

  private url = 'https://tranquil-hollows-33027.herokuapp.com/api/';

  constructor(private http: HttpClient, private router: Router) { }

  getPost(username?: string) {
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
    return decode;
  }

  getProfile(username?: string)  {
    if (username) { return this.http.get(this.url + 'profiles/' + username); }
    return this.http.get(this.url + 'profiles/');
  }

  getCommentsbyUsername(username: string) {
    return this.http.get(this.url + 'comments/username/' +  username);
  }

  updateProfile(profile: object) {
    const token = localStorage.getItem('x-auth-token');
    const headers = new HttpHeaders().set('Content-Type', 'application/json').append('x-auth-token', token);
    return this.http.put(this.url + 'profiles', profile, { headers });
  }

  logOut() {
    localStorage.removeItem('x-auth-token');
    this.router.navigateByUrl('/');
  }

  verify(token: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'auth/verify', {token}, {headers});
  }
}
