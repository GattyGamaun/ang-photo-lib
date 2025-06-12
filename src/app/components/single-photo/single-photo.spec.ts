import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhoto } from './single-photo';

describe('SinglePhoto', () => {
  let component: SinglePhoto;
  let fixture: ComponentFixture<SinglePhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePhoto],
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePhoto);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', '8');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Image tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-id="image"]')).toBeDefined();
  });

  it('should have the "Remove from Favorites" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-id="remove"]')?.textContent).toContain(
      'Remove from Favorites',
    );
  });
});
