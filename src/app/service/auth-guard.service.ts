import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ImgyApiService } from '../imgy-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  async canActivate() {
    const token = localStorage.getItem('x-auth-token');
    if (token) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
