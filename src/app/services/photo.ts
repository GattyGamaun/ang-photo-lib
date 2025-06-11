import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
      () => `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`,
    );
    const randomDelay = Math.random() * 100 + 200; // Delay between 200-300ms
    return of(photos).pipe(delay(randomDelay));
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

  removeFromFavorites(photo: string) {
    this.favorites = this.favorites.filter((fav) => fav !== photo);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getPhotoById(id: string): string | null {
    return this.favorites.find((photo) => photo.includes(id)) || null;
  }
}
