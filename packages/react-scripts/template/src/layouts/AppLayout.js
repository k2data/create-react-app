import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicLayout from './BasicLayout';
import AdminLayout from './AdminLayout';

const AppLayout = () => (
  <Switch>
    <Route path="/admin" component={AdminLayout} />
    <Route path="/" component={BasicLayout} />
  </Switch>
)

export default AppLayout;
