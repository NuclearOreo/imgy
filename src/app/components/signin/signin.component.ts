import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: ImgyApiService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.service.geToken(this.email, this.password).subscribe(
      (res: {token: string}) => {
        localStorage.setItem('x-auth-token', res.token);
        this.router.navigateByUrl('/');
      }
    );
  }
}
