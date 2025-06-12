import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoStream } from './photo-stream';
import { PhotoService } from '../../services/photo';
import { of } from 'rxjs';

describe('PhotoStream', () => {
  let component: PhotoStream;
  let fixture: ComponentFixture<PhotoStream>;
  let spy: jasmine.Spy;
  const photos = ['a', 'b', 'c', 'd'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoStream],
      providers: [PhotoService],
    }).compileComponents();

    const photoService = TestBed.inject(PhotoService);
    spy = spyOn(photoService, 'fetchPhotos').and.returnValue(of(photos));
    fixture = TestBed.createComponent(PhotoStream);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 images loaded by default', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.photos.length).toBe(4);
  });
});
