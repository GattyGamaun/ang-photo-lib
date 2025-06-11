import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-stream',
  imports: [NgOptimizedImage],
  template: `
    @for (photo of photos; track $index) {
      <img ngSrc="{{ photo }}" alt="" width="200" height="200" />
    }
  `,
  styles: ``,
})
export class PhotoStream implements OnInit {
  readonly photoService = inject(PhotoService);
  photos: string[] = [];
  loading = false;

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.loading = true;
    this.photoService.fetchPhotos().subscribe({
      next: (newPhotos) => {
        this.photos = [...this.photos, ...newPhotos];
        this.loading = false;
      },
    });
  }

  addToFavorites(photo: string) {
    this.photoService.addToFavorites(photo);
  }
}
