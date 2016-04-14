import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import CashierTerminal from './containers/CashierTerminal';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CashierTerminal} />
  </Route>
);