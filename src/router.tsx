import { BrowserRouter, Route } from 'react-router-dom'

import { FormStep1 } from './steps/FormStep1'
import { FormStep2 } from './steps/FormStep2';

export const Router = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={FormStep1} />
        <Route path="/step2" exact component={FormStep2} />
      </BrowserRouter>
    );
}