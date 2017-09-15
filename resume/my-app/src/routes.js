import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import AboutMe from './containers/AboutMe/AboutMe'
import App from './containers/App/App'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AboutMe}/>
    </Route>
  </Router>
);
