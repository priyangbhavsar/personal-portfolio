import { technicalSkills } from './../../utils/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  technicalSkills = technicalSkills


  constructor() { }

  ngOnInit(): void {
  }

}
