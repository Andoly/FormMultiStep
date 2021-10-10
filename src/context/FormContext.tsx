import { createContext, useContext, useReducer } from "react";

type StateProps = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type ActionProps = {
  type: FormActions;
  payload: any;
};

const FormContext = createContext(undefined);

// Reducer
enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};
