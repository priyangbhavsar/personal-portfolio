import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrameComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { url?: string }, private sanitizer: DomSanitizer) { }
  url?: SafeResourceUrl
  ngOnInit(): void {
    console.log('this.data.url', this.data.url)
    if (this.data.url)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }

}
