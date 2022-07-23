import { Component, OnInit } from '@angular/core';
import { filesList, images } from '../../utils/constants'
@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {
  images = images
  filesList = filesList  
  constructor() { }

  ngOnInit(): void {

  }

}
