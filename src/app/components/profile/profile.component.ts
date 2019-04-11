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
  comments = [];
  firstname = '';
  lastname = '';
  street = '';
  city = '';
  state = '';
  zip = '';
  error = false;
  errorComment = false;

  constructor(private service: ImgyApiService) {
    const username = service.getUser().username;
    this.service.getPost(username).subscribe((posts) => { this.list = posts; });
    this.service.getProfile(username).subscribe((profile) => { this.info = profile; });
    this.service.getCommentsbyUsername(username).subscribe((comments: []) => { this.comments = comments; });
   }

  ngOnInit() {
  }

  updateProfile() {
    const firstname = this.firstname;
    const lastname = this.lastname;
    const city = this.city;
    const state = this.state;
    const zip = this.zip;
    const street = this.street;
    this.service.updateProfile({ firstname, lastname, street, city, state, zip }).subscribe(
      (res) => { location.reload(); },
      (err) => { this.error = true; }
     );
  }

  deleteComment(commentId: string, i: number) {
    this.service.deleteComment(commentId).subscribe(
      (res) => { this.comments.splice(i, 1); },
      (err) => { this.errorComment = true; }
    );
  }

}
