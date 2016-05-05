import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import LoginContainer from './containers/LoginContainer';
import Terminal from './containers/terminal/TerminalContainer';
import Categories from './containers/categories/CategoriesContainer';
import Items from './containers/items/ItemsContainer';
import DashboardLayoutContainer from './containers/DashboardLayoutContainer';
import Sales from './containers/sales/SalesContainer';
import FormAdmin from './containers/form-admin/FormAdminContainer';
import Inventory from './containers/InventoryContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="terminal" component={Terminal}>
      <IndexRoute component={Categories} />
      <Route path="/categories" component={Categories}>
        <Route path="/items" component={Items} />
      </Route>
    </Route>
    <Route path="dashboard" component={DashboardLayoutContainer}>
      <IndexRoute component={Sales} />
      <Route path="/sales" component={Sales} />
      <Route path="/admin" component={FormAdmin} />
      <Route path="/inventory" component={Inventory} />
    </Route>
  </Route>
);

