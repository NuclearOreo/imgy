import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ImgyApiService } from '../imgy-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HidepagesService implements CanActivate {

  constructor(private service: ImgyApiService, private router: Router) { }

  canActivate() {
    if (this.service.isLogin()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
