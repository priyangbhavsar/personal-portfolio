import { FileObject, MyCommand } from "./CommonModels";

export const allCommands = [
  new MyCommand('show', 'to show the content of a file <br> eg: show fileName', 1),
  new MyCommand('ls', 'get list of files <br>', 0),
  new MyCommand('download', 'to download a file if it is downloadable <br> eg: download fileName', 1),
  new MyCommand('help', 'to get the help', 0),
  new MyCommand('cls', 'to clear the terminal', 0),
]

export const filesList = [
  new FileObject({
    name: 'resume',
    extension: '.priyang',
    isDownloadable: true,
    downloadURL: 'https://drive.google.com/uc?id=1dg9lhhFxb9tp92wyeJ0ZpKSGHZSC48f6&export=download',
    URL: 'https://drive.google.com/file/d/1dg9lhhFxb9tp92wyeJ0ZpKSGHZSC48f6/view'
  }),
  new FileObject({
    name: 'leetcode',
    extension: '.priyang',
    isDownloadable: false,
    URL : 'https://leetcode.com/bhavsarpriyang9999/'
  }),
  new FileObject({
    name: 'codechef',
    extension: '.priyang',
    isDownloadable: false,
    URL: 'https://www.codechef.com/users/priyang'
  }),
  new FileObject({
    name: 'binarysearch',
    extension: '.priyang',
    isDownloadable: false,
    URL: 'https://binarysearch.com/@/priyangbhavsar'
  }),
  new FileObject({
    name: 'lichess',
    extension: '.priyang',
    isDownloadable: false,
    URL : 'https://lichess.org/@/Priyangbhavsar'
  }),
  new FileObject({
    name: 'contact details',
    extension: '.priyang',
    isDownloadable: false,
    URL: ''
  }),
]
