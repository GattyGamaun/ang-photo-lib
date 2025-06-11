import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo';

@Component({
  selector: 'app-favorites',
  imports: [],
  template: ` <p>favorites works!</p> `,
  styles: ``,
})
export class Favorites implements OnInit {
  readonly photoService = inject(PhotoService);
  favorites: string[] = [];

  ngOnInit(): void {
    this.favorites = this.photoService.getFavorites();
  }
}
