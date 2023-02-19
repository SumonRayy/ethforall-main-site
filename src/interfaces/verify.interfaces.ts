export interface IStepNumber {
  completed: boolean;
}

export interface ITopNavProps {
  step: {
    [key: number]: boolean;
  };
}

export interface IStepInterface {
  setVerifyStep: (x: number) => void
}

export interface IFaceClass {
  prevClass: string,
  currentClass: string,
  allClasses: String[],
}
