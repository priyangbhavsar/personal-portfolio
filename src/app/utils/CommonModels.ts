export class basicCommand {
  base: string = 'priyang@home:';
  directory: string;
  cmd: string = '';
  response: string = '';

  constructor(directory: string = '$ ') {
    this.directory = directory
  }

}

export class MyCommand {
  name: string
  description: string
  numberOfParams: number

  constructor(name: string, description: string, numberOfParams: number) {
    this.name = name
    this.description = description
    this.numberOfParams = numberOfParams
  }

  toString() {
    return `<div>Command : ${this.name}<br> Description : ${this.description}</div>`
  }
}


export class FileObject {
  name: string
  extension: string
  isDownloadable: boolean
  URL: string
  downloadURL?: string
  constructor(value: FileObject) {
    this.name = value.name
    this.extension = value.extension
    this.isDownloadable = value.isDownloadable
    this.URL = value.URL
    this.downloadURL = value.downloadURL

  }
  toString() {
    return `${this.name}${this.extension}`
  }
}
