import { Component, OnInit } from '@angular/core';

import { Photo } from 'src/app/shared/interfaces/photo';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getPhotos('1').subscribe({
      next: (response: Photo[]) => {
        console.log('Here?');
        this.photos = response;
      },
      error: (err: Error) => {
        console.log('Algo fallo: ', err);
      }
    });
  }
}
