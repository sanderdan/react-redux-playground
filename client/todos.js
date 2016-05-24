import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';
import SingleTask from './components/SingleTask';
import TaskList from './components/TaskList';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={TaskList}></IndexRoute>
      <Route path="/view/:taskId" component={SingleTask}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
