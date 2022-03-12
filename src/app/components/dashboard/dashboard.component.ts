import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.addEventListener('mousemove', function (e) {
    //   let body = document.querySelector('body');
    //   let circle = document.getElementById('circle');
    //   let left = e.screenX;
    //   let top = e.screenY;
    //   setTimeout((circle: HTMLElement |null) => {
    //     if (circle && circle.style) {
    //       circle.style.left = left + 'px';
    //       circle.style.top = top + 'px';
    //     }
    //   }, 0, circle)
    // });
  }


}
