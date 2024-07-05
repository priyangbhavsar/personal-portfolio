import { Component, OnInit } from '@angular/core';
import { filesList, images } from '../../utils/constants'
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { FrameComponent } from '../frame/frame.component';
import { StepperService } from '../../utils/services/stepper.service';
import { STEPPER } from '../../utils/enumsGlobal';
import _ from 'lodash';
@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {
  images = images
  filesList = filesList

  constructor(public domSanitizer: DomSanitizer, private dialog: MatDialog, private stepperService: StepperService) { }

  ngOnInit(): void {

  }


  public showFile(name: string): void {

    if (name) {
      const currFile = filesList.find(el => el.getFullName() === name)
      console.log(currFile);
      try {
        if (currFile && currFile.canShow) {
          this.dialog.open(FrameComponent, {

            height: '90%',
            width: '90%',
            data: {
              url: currFile.URL
            }
          })
        }
      } catch (e) {
        console.log("error  " + e);

      }
    }
  }

  openInNewTab(name?: string, isDownload = false): void {
    if (name) {
      const currFile = filesList.find(el => el.getFullName() === name)

      if (currFile && isDownload && currFile.downloadable) {
        window.open(currFile.downloadURL, '_blank')
      }
      if (!isDownload && currFile && currFile.URL) {
        if (currFile && !_.isUndefined(currFile.step))
          this.changeStep(currFile.step)
        else
          window.open(currFile.URL, '_blank')
      }
    }
  }

  changeStep(value: STEPPER) {
    this.stepperService.currStep.next(STEPPER.NOTHING)
    this.stepperService.currStep.next(value)
  }
}
