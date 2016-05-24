import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';
import SingleTask from './components/SingleTask';
import TaskList from './components/TaskList';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={TaskList}></IndexRoute>
        <Route path="/task/:taskId" component={SingleTask}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
