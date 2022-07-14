import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { STEPPER } from '../enumsGlobal';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor() { }

  currStep: BehaviorSubject<STEPPER> = new BehaviorSubject<STEPPER>(STEPPER.CONTACT)

  getCurrStep() {
    return this.currStep.asObservable();
  }
}
