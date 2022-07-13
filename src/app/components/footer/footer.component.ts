import { StepperService } from './../../utils/services/stepper.service';
import { Component, OnInit } from '@angular/core';
import { STEPPER } from 'src/app/utils/enumsGlobal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
  }

  changeStep(value : STEPPER) {
    this.stepperService.currStep.next(STEPPER.NOTHING)
    this.stepperService.currStep.next(value)
  }
}
