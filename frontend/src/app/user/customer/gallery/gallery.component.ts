import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { Gallery } from '../../../shared/models/gallery.model';
import { ActivatedRoute } from '@angular/router';
import {environment} from 'src/environments/environment'

import { HistoryService } from '../../../shared/history.service'
import { History } from '../../../shared/history.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  // providers:[GalleryService]
})

export class GalleryComponent implements OnInit {
  p=1;
  foods: any
  constructor(private galleryservice: GalleryService) { }

  ngOnInit() {
    this.galleryservice.getFoodList().subscribe((res)=> {
      this.foods= res as Gallery[];
    });

  }

}