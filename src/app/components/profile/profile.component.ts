import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  list: object;
  info: object;
  comments: object;
  firstname = '';
  lastname = '';
  city = '';
  state = '';
  zip = '';

  constructor(private service: ImgyApiService) {
    const username = service.getUser().username;
    this.service.getPost(username).subscribe( (posts) => { this.list = posts; });
    this.service.getProfile(username).subscribe((profile) => { this.info = profile; } );
    this.service.getCommentsbyUsername(username).subscribe((comments) => { this.comments = comments; } );
   }

  ngOnInit() {
  }

  updateProfile() {
  }

}
