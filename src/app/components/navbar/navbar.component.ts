import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login = false;

  constructor(private router: Router) {
    const token = localStorage.getItem('x-auth-token');
    if (token) { this.login = true; }
   }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('x-auth-token');
    location.reload();
  }

}
