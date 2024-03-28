export enum STEPPER {
  PERSONAL_INFO = 1,
  MY_JOURNEY = 2,
  CONTACT = 3,
  FILE_SYSTEM = 4,
  NOTHING = -1
}


export const HEADINGMAP = {
  [STEPPER.PERSONAL_INFO] : 'About',
  [STEPPER.MY_JOURNEY] :'My Journey' ,
  [STEPPER.CONTACT] : 'Terminal',
  [STEPPER.FILE_SYSTEM]: 'File Explorer',
  [STEPPER.NOTHING] : '',
}
