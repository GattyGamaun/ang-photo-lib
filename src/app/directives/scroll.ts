import {
  Directive,
  DoCheck,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class Scroll implements OnInit, DoCheck, OnDestroy {
  readonly container = inject(ElementRef);
  readonly zone = inject(NgZone);
  readonly scrollEnd = output();

  ngDoCheck() {
    console.log('do check');
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.container.nativeElement.addEventListener(
        'scroll',
        this.onScroll.bind(this),
      );
    });
  }

  ngOnDestroy(): void {
    this.container.nativeElement.removeEventListener(
      'scroll',
      this.onScroll.bind(this),
    );
  }

  onScroll(): void {
    const el = this.container.nativeElement;
    const pxFromBottom = 100;
    const distanceFromBottom =
      el.scrollHeight - (el.scrollTop + el.clientHeight);

    if (distanceFromBottom < pxFromBottom) {
      this.scrollEnd.emit();
    }
  }
}
