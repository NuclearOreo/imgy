import { Component, OnInit } from '@angular/core';
import { ImgyApiService } from 'src/app/imgy-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: ImgyApiService) { }

  ngOnInit() {
    this.service.getPost().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
