import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a Header', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-id="header"]')).toBeDefined();
  });

  it('should have the "Photos" button', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-id="photos"]')?.textContent).toContain(
      'Photos',
    );
  });

  it('should have the "Favorites" button', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('[test-id="favorites"]')?.textContent,
    ).toContain('Favorites');
  });
});
