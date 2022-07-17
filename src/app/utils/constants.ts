import { FileObject, MyCommand } from "./CommonModels";

export const allCommands = [
  new MyCommand('help', 'to get the help', 0),
  new MyCommand('ls', 'get list of files <br>', 0),
  new MyCommand('cls', 'to clear the terminal', 0),
  new MyCommand('show', 'to show the content of a file <br> eg: show fileName', 1),
  new MyCommand('download', 'to download a file if it is downloadable <br> eg: download fileName', 1),
  new MyCommand('open', 'to open a file in new tab if it can be opened <br> eg: open fileName', 1),
]

export const filesList = [
  new FileObject({
    name: 'resume',
    extension: '.pri',
    downloadable: true,
    downloadURL: 'https://drive.google.com/uc?id=1dg9lhhFxb9tp92wyeJ0ZpKSGHZSC48f6&export=download',
    URL: 'https://drive.google.com/file/d/1dg9lhhFxb9tp92wyeJ0ZpKSGHZSC48f6/view',
    canOpen: true
  }),
  new FileObject({
    name: 'leetcode',
    extension: '.pri',
    downloadable: false,
    URL : 'https://leetcode.com/bhavsarpriyang9999/',
    canOpen: true,
    canShow: true
  }),
  new FileObject({
    name: 'codechef',
    extension: '.pri',
    downloadable: true,
    URL: 'https://www.codechef.com/users/priyang',
    downloadURL: 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc',
    canOpen: true,

  }),
  new FileObject({
    name: 'binarysearch',
    extension: '.pri',
    downloadable: false,
    URL: 'https://binarysearch.com/@/priyangbhavsar',
    canOpen: true,
    canShow: true
  }),
  new FileObject({
    name: 'lichess',
    extension: '.pri',
    downloadable: false,
    URL : 'https://lichess.org/@/Priyangbhavsar',
    canOpen: true
  }),
  // new FileObject({
  //   name: 'contact details',
  //   extension: '.pri',
  //   downloadable: false,
  //   URL: ''
  // }),
]



export const cmdErrors = {
  fileNotExists: 'file does not exists',
}
