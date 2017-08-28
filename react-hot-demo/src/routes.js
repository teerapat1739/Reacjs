import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import AboutMe from './containers/AboutMe/AboutMe'
import App from './containers/App/App'
import Projects from './containers/Projects/Projects'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AboutMe}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/achievement" component={App}/>
    </Route>
  </Router>
);
