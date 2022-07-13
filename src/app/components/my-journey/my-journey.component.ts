import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-journey',
  templateUrl: './my-journey.component.html',
  styleUrls: ['./my-journey.component.scss']
})
export class MyJourneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // listen for events
    window.addEventListener("load", this.callbackFunc,);
    window.addEventListener("resize", this.callbackFunc,);
    window.addEventListener("scroll", this.callbackFunc,);
  }

  callbackFunc() {
    function isItemInView(item: HTMLElement) {
      var rect = item.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    const items = document.querySelectorAll('li')
    if (items) {
      for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
          items[i].classList.add("show");
        }
      }
    }
  }

}
