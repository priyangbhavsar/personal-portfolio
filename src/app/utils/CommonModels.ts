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
interface FileObjectInterface {
  name: string
  extension: string
  downloadable: boolean
  URL: string
  downloadURL?: string
  canShow?: boolean
  canOpen?: boolean
  iconUrl?: string
}

export class FileObject {
  name: string
  extension: string
  downloadable: boolean
  URL: string
  downloadURL?: string
  canShow?: boolean
  canOpen?: boolean
  iconUrl?: string
  constructor(value: FileObjectInterface) {
    this.name = value.name
    this.extension = value.extension
    this.downloadable = value.downloadable
    this.URL = value.URL
    this.downloadURL = value.downloadURL
    this.downloadable = value.downloadable
    this.canOpen = value.canOpen
    this.canShow = value.canShow
    this.iconUrl = value.iconUrl

  }
  toString(id: number | undefined = undefined) {
    if (id) {
      return `
      <br> id: ${id}
      <br>name : ${this.name}${this.extension}
      <br> can open: ${this.canOpen}
      <br> can show: ${this.canShow}
      <br> can download: ${this.downloadable}`
    }
    return `
    <br>name : ${this.name}${this.extension}
    <br> can open: ${this.canOpen}
    <br> can show: ${this.canShow}
    <br> can download: ${this.downloadable}`
  }

  getFullName(): string {
    return `${this.name}${this.extension}`
  }

  // toStringWithId() {
  //   return `
  //   <br> id: ${id}
  //   <br>name : ${this.name}${this.extension}
  //   <br> canOpen ${this.canOpen}
  //   <br> canShow: ${this.canShow}
  //   <br> canDownload: ${this.downloadable}`
  // }
}
