import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private service: ImgyApiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    service.getPostById(id).subscribe((res: Post) => { this.post = res; });
  }

  ngOnInit() {
  }

}
