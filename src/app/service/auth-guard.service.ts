import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ImgyApiService } from '../imgy-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private service: ImgyApiService) { }

  async canActivate() {
    const token = localStorage.getItem('x-auth-token');
    if (token) {
      await this.service.verify(token).toPromise().catch(
        (err) => {
          localStorage.removeItem('x-auth-token');
          this.router.navigateByUrl('/');
          return false;
        });
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
