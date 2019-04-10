import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';
import { log } from 'util';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  id: string;
  post: Post;
  comments = [];
  error = false;

  constructor(private service: ImgyApiService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    service.getPostById(this.id).subscribe((post: Post) => {
      this.post = post; this.getComments();
    });
  }

  ngOnInit() {
  }

  async getComments() {
    // tslint:disable-next-line:prefer-const
    for (let commentsId of this.post.comments) {
      const comment = await this.service.getCommentsbyId(commentsId).toPromise();
      this.comments.push(comment);
    }
  }

  deletePost() {
    this.service.deletePost(this.id).subscribe(
    (res) => { this.router.navigateByUrl('/Profile'); console.log(res); },
    (err) => { this.error = true; console.log(err); });
  }

}
