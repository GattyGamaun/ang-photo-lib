import { Component, inject, input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo';
import { PHOTO_URL } from '../../constants';

@Component({
  selector: 'app-single-photo',
  imports: [NgOptimizedImage],
  template: `
    <section class="mt-1 mb-1">
      @if (photo) {
        <img [ngSrc]="photo" alt="" width="600" height="800" priority />
        <div class="mt-1">
          <button (click)="removeFromFavorites()">Remove from Favorites</button>
        </div>
      }
    </section>
  `,
  styles: `
    section {
      text-align: center;
    }
  `,
})
export class SinglePhoto implements OnInit {
  readonly photoService = inject(PhotoService);
  readonly router = inject(Router);

  protected id = input.required<string>();
  protected photo = '';

  ngOnInit(): void {
    this.photo = `${PHOTO_URL}/id/${this.id()}/600/800`;
  }

  protected removeFromFavorites(): void {
    const photo = `${PHOTO_URL}/id/${this.id()}/200`;
    this.photoService.removeFromFavorites(photo);
    this.router.navigate(['/favorites']);
  }
}
