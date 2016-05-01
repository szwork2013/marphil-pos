import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Login from './containers/login/Login';
import Terminal from './containers/terminal/TerminalContainer';
import Categories from './containers/categories/CategoriesContainer';
import Items from './containers/items/ItemsContainer';
import Dashboard from './containers/dashboard/DashboardContainer';
import Graphs from './containers/graphs/GraphsContainer';
import FormAdmin from './containers/form-admin/FormAdminContainer';
import Inventory from './containers/inventory/InventoryContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="terminal" component={Terminal}>
      <IndexRoute component={Categories} />
      <Route path="categories" component={Categories}>
        <Route path="items" component={Items} />
      </Route>
    </Route>
    <Route path="dashboard" component={Dashboard}>
      <IndexRoute component={Graphs} />
      <Route path="graphs" component={Graphs} />
      <Route path="admin" component={FormAdmin} />
      <Route path="inventory" component={Inventory} />
    </Route>
  </Route>
);

