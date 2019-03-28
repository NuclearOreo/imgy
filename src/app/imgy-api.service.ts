import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgyApiService {

  private url = 'https://thawing-beach-86699.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url + 'posts');
  }

}
