import { FocusOptions } from '@angular/cdk/a11y';
import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import _ from 'lodash';
import { basicCommand, FileObject, MyCommand } from 'src/app/utils/CommonModels';
import { allCommands, cmdErrors, filesList } from 'src/app/utils/constants';
import { CommonService } from 'src/app/utils/services/common.service';
import { FrameComponent } from '../frame/frame.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  commands: basicCommand[] = [
    new basicCommand()
  ]

  currentCommand: basicCommand = this.commands[0]

  @ViewChild('cmd_cursor')
  cursor: ElementRef

  @ViewChild('input')
  input: ElementRef

  inp: HTMLInputElement

  @Input('isFocussed')
  set isFocussed(val: boolean) {
    this.inp?.focus()
  }

  @Output('cmdExecuted')
  emitter = new EventEmitter<boolean>()

  constructor(private dialog: MatDialog, private commonService: CommonService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log('this.cursor', this.cursor)
    setInterval(() => this.cursor.nativeElement.classList.toggle('display-none'), 1000)
    this.inp = this.input.nativeElement
  }


  // @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(): void {
    // console.log(event)
    // event.stopPropagation()
    // // if (event.keyCode === 8) {
    // //   this.currentCommand.cmd = this.currentCommand.cmd.substring(0, this.currentCommand.cmd.length - 1)
    // // }

    // if (event.keyCode === 13) {
    //   this.currentCommand.response = this.renderCommand();
    //   const newCmd: basicCommand = new basicCommand();
    //   this.currentCommand = newCmd
    //   this.commands.push(newCmd);
    //   this.inp.value = ''
    // } else if (event.key.length === 1) {
    // }
    // // this.currentCommand.cmd = inp.value

    this.currentCommand.response = this.renderCommand();
    const newCmd: basicCommand = new basicCommand();
    this.currentCommand = newCmd
    this.commands.push(newCmd)
    setTimeout(() => this.emitter.emit(true))

    // this.currentCommand.
  }

  renderCommand(): string {
    const cmdToBeParsed = this.currentCommand.cmd
    const lst = cmdToBeParsed.split(' ')
    console.log(lst, allCommands)
    const comm = allCommands.find(el => el.name === lst[0])
    lst.shift()
    if (comm) {
      const ret = this.executeCommand(comm, lst)
      return ret
    }
    return `this command is not recognized use 'help' to view all commands`
  }

  executeCommand(comm: MyCommand, params: Array<string>): string {
    let ret = ''
    switch (comm.name) {
      case 'help':
        allCommands.forEach(command => {
          ret += command.toString() + '<br>'
        })
        break
      case 'ls':
        ret += 'this is the list of all files : <br>'
        filesList.forEach(file => {
          ret += file.toString() + '<br>'
        })
        break
      case 'cls':
        this.commands = []
        break
      case 'show':
        ret = this.showFile(_.first(params))
        break
      case 'download':
        ret = this.openInNewTab(_.first(params), true)
        break
      case 'open':
        ret = this.openInNewTab(_.first(params))
        break

    }
    return ret
  }

  showFile(name?: string): string {
    if (name) {
      const currFile = filesList.find(el => el.getFullName() === name)
      if (!currFile) {
        return cmdErrors.fileNotExists
      }
      if (currFile.canShow) {
        this.dialog.open(FrameComponent, {

          height: '90%',
          width: '90%',
          data: {
            url: currFile.URL
          }
        })
        return 'showing the file...'
      }
      return 'this file cannot be shown'
    }
    return 'please enter fileName <br> Hint : you can use command \'show leetcode.pri\''
  }

  openInNewTab(name?: string, isDownload = false): string {
    if (name) {
      const currFile = filesList.find(el => el.getFullName() === name)
      if (!currFile) {
        return cmdErrors.fileNotExists
      }
      if (isDownload && currFile.downloadable) {
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
        return 'downloading...'
      }
      if (!isDownload && currFile.URL) {
        window.open(currFile.URL, '_blank')
        return 'opening...'
      }
      return 'this file cannot be shown'
    }
    return 'please enter fileName <br> Hint : you can use command \'show leetcode.pri\''

  }
  doNotFocusOnMe() {
    this.inp.focus();
  }
}
