import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  list: object;
  info: object;
  comments: object;

  constructor(private service: ImgyApiService, private route: ActivatedRoute, private router: Router) {
    this.username = route.snapshot.paramMap.get('username');
    this.ifUser();
    this.service.getPost(this.username).subscribe(
      (res) => { this.list = res; },
      (err) => { console.log(err); });

    this.service.getProfile(this.username).subscribe(
      (res) => { this.info = res; },
      (err) => { console.log(err); });

    this.service.getCommentsbyUsername(this.username).subscribe(
      (res) => { this.comments = res; }
    );
   }

  ngOnInit() {
  }

  async ifUser() {
    const res = await this.service.findUser(this.username).toPromise();
    if (Object.keys(res).length === 0) {
      this.router.navigateByUrl('/');
    }
  }

}
