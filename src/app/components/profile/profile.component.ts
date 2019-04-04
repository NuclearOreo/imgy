import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  list: object;
  info: object;

  constructor(private service: ImgyApiService) {
    const username = service.getUser().username;
    this.service.getPost(username).subscribe( (res) => { this.list = res; });
    this.service.getProfile(username).subscribe((res) => { this.info = res; } );
   }

  ngOnInit() {
  }

}
