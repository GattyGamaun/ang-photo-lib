import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhoto } from './single-photo';

describe('SinglePhoto', () => {
  let component: SinglePhoto;
  let fixture: ComponentFixture<SinglePhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePhoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
