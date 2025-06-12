import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favorites } from './favorites';

describe('Favorites', () => {
  let component: Favorites;
  let fixture: ComponentFixture<Favorites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favorites],
    }).compileComponents();

    fixture = TestBed.createComponent(Favorites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Image tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-id="image"]')).toBeDefined();
  });
});
