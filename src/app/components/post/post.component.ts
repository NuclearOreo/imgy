import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: string;
  post: Post;
  comments = [];
  newComment: string;
  error = false;

  constructor(public service: ImgyApiService, private route: ActivatedRoute, private router: Router) {
    this.postId = this.route.snapshot.paramMap.get('id');
    service.getPostById(this.postId).subscribe((post: Post) => {
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

  submitComment() {
    this.service.createComment(this.postId, this.newComment).subscribe(
      (res) => { this.comments.push(res); },
      (err) => { this.error = true; }
    );
  }

}
