import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  email: string;
  password1: string;
  password2: string;
  error = false;

  constructor( private service: ImgyApiService, private router: Router ) { }

  ngOnInit() {
  }

  signUp() {
    if (this.password1 === this.password2) {
      this.service.signUp(this.username, this.email, this.password1).subscribe(
        (res: {token: string}) => {
                                    localStorage.setItem('x-auth-token', res.token);
                                    this.createProfile();
                                    this.router.navigateByUrl('/');
                                  },
        (err) => { this.error = true; }
      );
    }
  }

  createProfile() {
    const info = {firstname: 'N/A', lastname: 'N/A', street: 'N/A', city: 'N/A', state: 'N/A', zip: 0};
    this.service.createProfile(info).subscribe(
      (res) => { console.log(res); },
      (err) => { console.log(err); } );
  }

}
