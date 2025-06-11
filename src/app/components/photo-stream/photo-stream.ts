import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo';
import { NgOptimizedImage } from '@angular/common';
import { Scroll } from '../../directives/scroll';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-photo-stream',
  imports: [NgOptimizedImage, Scroll],
  template: `
    <div
      appScroll
      class="flex gap-05 wrap container"
      (scrollEnd)="onScrollEnd()"
    >
      @for (photo of photos; track $index) {
        <img
          [ngSrc]="photo"
          alt=""
          width="200"
          height="200"
          priority
          (click)="addToFavorites(photo)"
        />
      }
    </div>
  `,
  styles: `
    .container {
      height: 80vh;
      outline: 2px solid darkslategray;
      overflow-y: scroll;
    }
  `,
})
export class PhotoStream implements OnInit {
  readonly photoService = inject(PhotoService);

  photos: string[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadImages();
  }

  private loadImages(): void {
    this.loading = true;
    this.photoService
      .fetchPhotos()
      .pipe(debounceTime(1000))
      .subscribe({
        next: (newPhotos) => {
          this.photos = [...this.photos, ...newPhotos];
          this.loading = false;
        },
      });
  }

  protected addToFavorites(photo: string): void {
    this.photoService.addToFavorites(photo);
  }

  onScrollEnd(): void {
    this.loadImages();
    console.log('load more', this.photos);
  }
}
