import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgyApiService {

  private url = 'https://obscure-ridge-18497.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url + 'posts');
  }

}
