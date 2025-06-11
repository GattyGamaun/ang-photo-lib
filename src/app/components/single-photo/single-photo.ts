import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo';

@Component({
  selector: 'app-single-photo',
  imports: [],
  template: `
    <p>
      single-photo works!
    </p>
  `,
  styles: ``
})
export class SinglePhoto implements OnInit {
  readonly photoService = inject(PhotoService);
  readonly route = inject(ActivatedRoute);
  photo: string | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.photo = id ? this.photoService.getPhotoById(id) : null;
  }

  removeFromFavorites() {
    if (this.photo) {
      this.photoService.removeFromFavorites(this.photo);
    }
  }
}
