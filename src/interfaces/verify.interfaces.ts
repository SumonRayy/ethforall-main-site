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
