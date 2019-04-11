import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  list: object;
  info: object;
  comments: object;

  constructor(private service: ImgyApiService, private route: ActivatedRoute) {
    const username = route.snapshot.paramMap.get('username');
    this.service.getPost(username).subscribe(
      (res) => { this.list = res; },
      (err) => { console.log(err); });

    this.service.getProfile(username).subscribe(
      (res) => { this.info = res; },
      (err) => { console.log(err); });

    this.service.getCommentsbyUsername(username).subscribe(
      (res) => { this.comments = res; }
    );
   }

  ngOnInit() {
  }

}
