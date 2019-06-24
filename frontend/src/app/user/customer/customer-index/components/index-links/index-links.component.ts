import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { Gallery } from '../../../../../shared/models/gallery.model';

@Component({
  selector: 'app-index-links',
  templateUrl: './index-links.component.html',
  styleUrls: ['./index-links.component.css']
})
export class IndexLinksComponent implements OnInit {

  galleries: any
  url1="http://localhost:3000/images/gallery/1.jpg";
  url2="http://localhost:3000/images/gallery/2.jpg";
  url3="http://localhost:3000/images/gallery/3.jpg";
  url4="http://localhost:3000/images/gallery/4.jpg";
  url5="http://localhost:3000/images/gallery/5.jpg";
  url6="http://localhost:3000/images/gallery/6.jpg";
  url7="http://localhost:3000/images/gallery/1.jpg";
  url8="http://localhost:3000/images/gallery/2.jpg";
  constructor(private galleryservice: GalleryService) { }

  ngOnInit() {
    this.galleryservice.getFoodList().subscribe((res)=> {
      this.galleries= res as Gallery[];
    });

  }

}
