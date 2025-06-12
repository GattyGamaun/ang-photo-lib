import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  NgZone,
  OnInit,
  output,
} from '@angular/core';
import { debounceTime, fromEvent, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appScroll]',
})
export class Scroll implements OnInit {
  readonly container = inject(ElementRef);
  readonly zone = inject(NgZone);
  readonly destroyRef = inject(DestroyRef);

  readonly scrollEnd = output<void>();

  readonly scrollEvent: Observable<any> = fromEvent(
    this.container.nativeElement,
    'scroll',
  );

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollEvent
        .pipe(debounceTime(1000), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.onScroll();
        });
    });
  }

  onScroll(): void {
    const el = this.container.nativeElement;
    const pxFromBottom = 200;
    const distanceFromBottom =
      el.scrollHeight - (el.scrollTop + el.clientHeight);

    if (distanceFromBottom < pxFromBottom) {
      this.scrollEnd.emit();
    }
  }
}
