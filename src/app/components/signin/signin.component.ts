import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(private service: ImgyApiService) { }

  ngOnInit() {
  }

  signIn() {
    this.service.geToken(this.email, this.password).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
