import { BrowserRouter, Route } from 'react-router-dom'

import { FormStep1 } from './steps/FormStep1'
import { FormStep2 } from './steps/FormStep2';
import { FormStep3 } from "./steps/FormStep3";

export const Router = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={FormStep1} />
        <Route path="/step2" exact component={FormStep2} />
        <Route path="/step3" exact component={FormStep3} />
      </BrowserRouter>
    );
}