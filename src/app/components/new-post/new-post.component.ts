import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  imageUrl: string;
  error = false;

  constructor(private service: ImgyApiService, private router: Router) { }

  ngOnInit() {
  }

  submitPost() {
    const username = this.service.getUser().username;
    this.service.createPost(this.imageUrl, username).subscribe(
      (res) => { this.router.navigateByUrl('/Profile'); },
      (err) => { this.error = true; } );
  }

}
