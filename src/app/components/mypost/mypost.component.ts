import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  post: Post;
  comments = [];

  constructor(private service: ImgyApiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    service.getPostById(id).subscribe((post: Post) => {
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

}
