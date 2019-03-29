import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';

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

  constructor( private service: ImgyApiService ) { }

  ngOnInit() {
  }

  signUp() {
    if (this.password1 === this.password2) {
      this.service.signUp(this.username, this.email, this.password1).subscribe((res) => {
        console.log(res);
      });
    }
  }

}
