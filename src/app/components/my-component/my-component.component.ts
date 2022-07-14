import { StepperService } from './../../utils/services/stepper.service';
import { STEPPER, HEADINGMAP } from './../../utils/enumsGlobal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1400ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 , display: 'none' }),
        animate('1800ms', style({ opacity: 0, display: 'none' }))
      ])
    ]
    )
  ]
})


export class MyComponentComponent implements OnInit, OnDestroy {
  constructor(private stepperService: StepperService) { }
  prevBx = 0
  prevBy = 0
  currStep = STEPPER.CONTACT
  private observers: Subscription[] = []
  heading = HEADINGMAP[this.currStep]
  ngOnInit(): void {
    console.log(window.innerWidth, window.innerHeight)
    console.log(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
    for (let i = 0; i < 0; i++) {
      setInterval(
        this.generateRandomLine,
        1500 * (i + 1),
        this
      )
    }
    const stepperObserver = this.stepperService.getCurrStep().subscribe(value => {
      this.currStep = value
      this.heading = HEADINGMAP[this.currStep]

    })
    this.observers.push(stepperObserver)
  }



  generateRandomLine(ref: MyComponentComponent) {
    const ax = ref.prevBx// this.abcdef(0,)
    const ay = ref.prevBy //* screen.height // this.abcdef(0,screen.height)
    const bx = Math.floor((Math.random() * window.innerWidth)) //this.abcdef(0,screen.width)
    const by = Math.floor((Math.random() * window.innerHeight)) //this.abcdef(0,screen.height)
    const res = ref.drawLine(ax, ay, bx, by)
    ref.prevBx = res.bx
    ref.prevBy = res.by
  }

  drawLine(ax: number, ay: number, bx: number, by: number) {
    if (ay > by) {
      bx = ax + bx;
      ax = bx - ax;
      bx = bx - ax;
      by = ay + by;
      ay = by - ay;
      by = by - ay;
    }
    // if (by > window.innerHeight) by = window.innerHeight - 1
    // if (bx > window.innerWidth) by = window.innerWidth - 1
    var calc = Math.atan((ay - by) / (bx - ax));
    calc = calc * 180 / Math.PI;
    var length = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
    console.log(ax, ay, bx, by)
    document.body.innerHTML += "<div id='line' style='height:" + length + "px;width:4px;background-color:rgba(89, 110, 110,0.5);position:absolute;top:" + (ay) + "px;left:" + (ax) + "px;transform:rotate(" + calc + "deg);-ms-transform:rotate(" + calc + "deg);transform-origin:0% 0%;-moz-transform:rotate(" + calc + "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" + calc + "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" + calc + "deg);-o-transform-origin:0% 0%;opacity:0.3;'></div>"
    return { bx, by }
  }

  ngOnDestroy() {
    this.observers.forEach(observer => {
      observer.unsubscribe()
    })
  }
}
