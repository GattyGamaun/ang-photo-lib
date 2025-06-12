import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PHOTO_URL } from '../constants';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private favorites: string[] = [];

  constructor() {
    const savedFavorites = localStorage.getItem('favorites');
    this.favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  fetchPhotos(): Observable<string[]> {
    const photos = Array.from(
      { length: 10 },
      () => `${PHOTO_URL}/id/${Math.floor(Math.random() * 100)}/200`,
    );

    return of(photos);
  }

  addToFavorites(photo: string) {
    if (!this.favorites.includes(photo)) {
      this.favorites.push(photo);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  getFavorites(): string[] {
    return this.favorites;
  }

  removeFromFavorites(photo: string): void {
    this.favorites = this.favorites.filter((fav) => fav !== photo);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
