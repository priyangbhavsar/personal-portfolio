import { Component, OnInit } from '@angular/core';
import { filesList, images } from '../../utils/constants'
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { FrameComponent } from '../frame/frame.component';
@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {
  images = images
  filesList = filesList

  constructor(public domSanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit(): void {

  }


  public showFile(name: string): void {
    console.log(name);

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
      } catch(e) {
        console.log("error  " + e);

      }
    }
  }

  openInNewTab(name?: string, isDownload = false): void {
    if (name) {
      const currFile = filesList.find(el => el.getFullName() === name)
      if (currFile && isDownload && currFile.downloadable) {
        // this.commonService.downloadFile(currFile.downloadURL).subscribe(result => {
        //   if (result.type === HttpEventType.DownloadProgress) {
        //     const percentDone = Math.round(100 * result.loaded / (result.total ?? 1));
        //     console.log(percentDone);
        //   }
        //   if (result.type === HttpEventType.Response) {
        //     var a = document.createElement("a");
        //     a.href = URL.createObjectURL(result.body.blob());
        //     a.download = 'fileName';
        //     // start download
        //     a.click();
        //     a.remove();
        //   }
        //   return 'showing the file...';
        // })

        window.open(currFile.downloadURL, '_blank')
      }
      if (!isDownload && currFile && currFile.URL) {
        window.open(currFile.URL, '_blank')
      }
    }
  }
}
