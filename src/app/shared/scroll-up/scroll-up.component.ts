import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.scss'
})
export class ScrollUpComponent {
  showScrollTop: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onScroll, true);
    }
  }

  onScroll = (): void => {
    if (this.isBrowser) {
      this.showScrollTop = window.scrollY > 500;
    }
  };

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onScroll, true);
    }
  }
}
