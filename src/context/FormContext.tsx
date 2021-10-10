import { createContext, ReactNode, useContext, useReducer } from "react";

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

type FormProviderProps = {
    children: ReactNode
}

const initialData: StateProps = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
}

type ContextType = {
  state: StateProps;
  dispatch: (action: ActionProps) => void;
};

const FormContext = createContext<ContextType | undefined>(undefined);

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


export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error("useForm must be used within FormProvider");
    }
    return context;
}