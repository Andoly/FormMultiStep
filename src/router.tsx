import { BrowserRouter, Route } from 'react-router-dom'

import { FormStep1 } from './steps/FormStep1'

export const Router = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={FormStep1} />
      </BrowserRouter>
    );
}