import { STEPPER } from "./enumsGlobal";

export class basicCommand {
  base: string = 'priyang@home:';
  directory: string;
  cmd: string = '';
  response: any = '';

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
    return `<tr><td> ${this.name}</td>  <td> ${this.description} </td></tr>`
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
  canView?: boolean
  step?: STEPPER
}

export class FileObject {
  name: string
  extension: string
  downloadable: boolean = false
  URL: string
  downloadURL?: string
  canShow?: boolean = false
  canOpen?: boolean = false
  iconUrl?: string
  canView?: boolean = false
  step?: STEPPER
  constructor(value: FileObjectInterface) {
    this.name = value.name
    this.extension = value.extension
    this.URL = value.URL
    this.downloadURL = value.downloadURL
    this.downloadable = value.downloadable ?? false
    this.canOpen = value.canOpen ?? false
    this.canShow = value.canShow ?? false
    this.iconUrl = value.iconUrl
    this.canView = value.canView ?? false
    this.step = value.step
  }
  toString(id: number | undefined = undefined) {
    if (id) {
      return `
      <tr>
      <td> ${id} </td>
      <td> ${this.name}${this.extension}  </td>
      <td> ${this.canOpen}  </td>
      <td> ${this.canShow}  </td>
      <td> ${this.downloadable}  </td>
      </tr>
      `
    }
    return `<tr>
      <td> ${this.name}${this.extension}  </td>
      <td> ${this.canOpen}  </td>
      <td> ${this.canShow}  </td>
      <td> ${this.downloadable}  </td>
      </tr>`
  }

  getFullName(): string {
    return `${this.name}${this.extension}`
  }
}
