import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [NgOptimizedImage],
  template: `
    <section class="f-center gap-05 wrap">
      @for (photo of favorites; track $index) {
        <img
          test-id="image"
          [ngSrc]="photo"
          width="200"
          height="200"
          priority
          alt=""
          (click)="onClick(photo)"
        />
      }
    </section>
  `,
  styles: ``,
})
export class Favorites implements OnInit {
  readonly photoService = inject(PhotoService);
  readonly router = inject(Router);
  favorites: string[] = [];

  ngOnInit(): void {
    this.favorites = this.photoService.getFavorites();
  }

  protected onClick(photo: string): void {
    const id = photo.split('/', 5).pop();
    this.router.navigate(['/photos', id]);
  }
}
