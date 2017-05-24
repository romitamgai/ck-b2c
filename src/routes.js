import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import routeConstants from './constants/routeConstants';

import App from './components/App';
import SingleView from './components/SingleView';
import PageNotFound from './components/commons/PageNotFound';

const routes = (
  <Router history={browserHistory}>
    <Route path={routeConstants.HOME} component={App}>
      <IndexRoute component={SingleView} />
      {/*<Route path="submenu" component={SubMenu} />*/}
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default routes;
