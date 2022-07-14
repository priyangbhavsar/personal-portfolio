export enum STEPPER {
  PERSONAL_INFO = 1,
  MY_JOURNEY = 2,
  CONTACT = 3,
  NOTHING = -1
}


export const HEADINGMAP = {
  [STEPPER.PERSONAL_INFO] : 'Personal Info',
  [STEPPER.MY_JOURNEY] :'My Journey' ,
  [STEPPER.CONTACT] : 'Terminal',
  [STEPPER.NOTHING] : '',
}
