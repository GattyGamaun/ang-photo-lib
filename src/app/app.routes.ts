import { Routes } from '@angular/router';
import { PhotoStream } from './components/photo-stream/photo-stream';
import { Favorites } from './components/favorites/favorites';
import { SinglePhoto } from './components/single-photo/single-photo';

export const routes: Routes = [
  { path: '', component: PhotoStream, pathMatch: 'full' },
  { path: 'favorites', component: Favorites },
  { path: 'photos/:id', component: SinglePhoto },
];
