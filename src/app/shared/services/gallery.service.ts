import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Photo } from '../interfaces/photo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(albumId: string): Observable<Photo[]> {
    const url: string = `${environment.apiUrl}photos?albumId=${albumId}`;
    return this.httpClient.get<Photo[]>(url);
  }
}
