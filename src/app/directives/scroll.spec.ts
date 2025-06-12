import { Scroll } from './scroll';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  template: `
    <section class="f-center">
      <div appScroll>
        @for (photo of photos; track $index) {
          <img [src]="photo" alt="" width="200" height="200" />
        }
      </div>
    </section>
  `,
})
class TestComponent {
  photos = [];
}

let fixture: ComponentFixture<TestComponent>;
let component: TestComponent;

describe('Scroll Directive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Scroll, TestComponent],
      providers: [
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement('div')),
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of Scroll directive', () => {
    const divWithDirective = fixture.nativeElement.querySelector('[appScroll]');

    expect(divWithDirective).toBeTruthy();
  });
});
