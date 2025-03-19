export enum STEPPER {
  PERSONAL_INFO = 1,
  MY_JOURNEY = 2,
  TERMINAL = 3,
  FILE_SYSTEM = 4,
  CONTACT = 5,
  TYPING_TEST = 6,
  NOTHING = -1
}


export const HEADINGMAP = {
  [STEPPER.PERSONAL_INFO] : 'About',
  [STEPPER.MY_JOURNEY] :'My Journey' ,
  [STEPPER.TERMINAL] : 'Terminal',
  [STEPPER.FILE_SYSTEM]: 'File Explorer',
  [STEPPER.CONTACT]: 'Contact Me',
  [STEPPER.TYPING_TEST]: 'Typing Test',
  [STEPPER.NOTHING] : ''
}
