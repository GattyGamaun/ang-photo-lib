import { Component, DestroyRef, inject, NgZone, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PhotoService } from '../../services/photo';
import { Scroll } from '../../directives/scroll';
import { asyncScheduler, of, subscribeOn, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-photo-stream',
  imports: [NgOptimizedImage, Scroll],
  templateUrl: './photo-stream.html',
  styleUrl: './photo-stream.css',
})
export class PhotoStream implements OnInit {
  readonly photoService = inject(PhotoService);
  readonly zone = inject(NgZone);
  readonly destroyRef = inject(DestroyRef);

  photos: string[] = [];
  protected loading = false;

  ngOnInit(): void {
    this.loadImages();
  }

  private loadImages(): void {
    const randomDelay = Math.random() * 100 + 200;
    this.photoService
      .fetchPhotos()
      .pipe(
        throttleTime(randomDelay),
        subscribeOn(asyncScheduler, 100),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (newPhotos) => {
          this.photos = [...this.photos, ...newPhotos];
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          return of([]);
        },
      });
  }

  protected addToFavorites(photo: string): void {
    this.photoService.addToFavorites(photo);
  }

  protected onScrollEnd(): void {
    this.loading = true;
    this.zone.run(() => {
      this.loadImages();
    });
  }
}
