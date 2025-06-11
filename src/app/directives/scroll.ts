import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class Scroll {
  readonly scrolled = output<void>();

  @HostListener('window:scroll')
  onScroll() {
    const threshold = 300; // Trigger when 300px away from the bottom
    const position = window.innerHeight + window.scrollY;
    const scrollHeight = document.body.scrollHeight;

    if (scrollHeight - position < threshold) {
      this.scrolled.emit();
    }
  }
}
