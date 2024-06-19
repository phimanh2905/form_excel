import { Component } from '@angular/core';
import { fromEvent, filter } from 'rxjs';

@Component({
  selector: 'app-scroll-grid',
  standalone: true,
  imports: [],
  templateUrl: './scroll-grid.component.html',
  styleUrl: './scroll-grid.component.scss',
})
export class ScrollGridComponent {
  ngOnInit(): void {
    // const stickyElement = document.querySelector(
    //   '.sticky-element'
    // ) as HTMLElement;
    // const scrollEvent$ = fromEvent(window, 'scroll');
    // const scrolledToBottom$ = scrollEvent$
    //   .pipe(
    //     filter(() => {
    //       const scrollTop =
    //         window.scrollY || document.documentElement.scrollTop;
    //       const height = document.documentElement.offsetHeight;
    //       const windowHeight = window.innerHeight;
    //       return scrollTop + windowHeight >= height;
    //     })
    //   )
    //   .subscribe(() => {
    //     console.log(`scrolledToBottom$`);
    //   });
  }
}
