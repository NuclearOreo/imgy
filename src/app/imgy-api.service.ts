import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgyApiService {

  private url = 'https://obscure-ridge-18497.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url + 'posts');
  }

  geToken(email: string, password: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'auth/login', {email, password}, {headers});
  }
}
