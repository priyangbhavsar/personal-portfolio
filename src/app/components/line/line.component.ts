import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor() { }

  @ViewChild('#line')
  line: HTMLElement

  @Input()
  ax: number

  @Input()
  ay: number

  @Input()
  by: number

  @Input()
  bx: number


  ngOnInit(): void {
    if (this.ay > this.by) {
      this.bx = this.ax + this.bx;
      this.ax = this.bx - this.ax;
      this.bx = this.bx - this.ax;
      this.by = this.ay + this.by;
      this.ay = this.by - this.ay;
      this.by = this.by - this.ay;
    }
    var calc = Math.atan((this.ay - this.by) / (this.bx - this.ax));
    calc = calc * 180 / Math.PI;
    const length = Math.sqrt((this.ax - this.bx) * (this.ax - this.bx) + (this.ay - this.by) * (this.ay - this.by));
    const style  = this.line.style
    style.height = length.toString()
    style.top = this.ay.toString()
    style.left = this.ax.toString()
    style.transform = `rotare(${calc}deg)`
  }
}
