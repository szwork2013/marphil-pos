import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import CashierTerminal from './containers/terminal/CashierTerminal';
import AdminDashboard from './containers//dashboard/AdminDashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AdminDashboard} />
    <Route path="terminal" component={CashierTerminal} />
  </Route>
);
