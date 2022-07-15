import { FocusOptions } from '@angular/cdk/a11y';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import _ from 'lodash';
import { basicCommand, FileObject, MyCommand } from 'src/app/utils/CommonModels';
import { allCommands, filesList } from 'src/app/utils/constants';
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
  constructor(private dialog: MatDialog) { }

  @ViewChild('cmd_cursor')
  cursor: ElementRef

  @ViewChild('input')
  input: ElementRef

  inp: HTMLInputElement

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
      this.commands.push(newCmd);
      // this.currentCommand.
  }

  renderCommand(): string {
    const cmdToBeParsed = this.currentCommand.cmd
    const lst = cmdToBeParsed.split(' ')
    console.log(lst, allCommands)
    const comm = allCommands.find(el => el.numberOfParams === lst.length - 1 && el.name === lst[0])
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
        this.showFile(_.first(params))
    }
    return ret
  }

  showFile(name?: string): void {
    if (name) {

      //console.log('value?.URL', value?.URL)
      this.dialog.open(FrameComponent, {
        height: '90%',
        width: '90%',
        data: {
          url: filesList.find(el => el.toString() === name)?.URL
        }
      })
    }
  }
  doNotFocusOnMe(event: Event) {
    console.log('event triggered', (this.input.nativeElement as HTMLElement).innerHTML);
    (this.input.nativeElement as HTMLElement).focus();

  }
}
