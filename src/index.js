import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// components
import {
  List
  , Update
} from "./layouts";

render(
  <Router>
    <Switch>
      <Route path="/edit/:id" component={Update}/>
      <Route path="/create" component={Update} />
      <Route exact={true} path="/list" component={List}/>
      <Route path="*" render={() => <h1>Not found</h1>} />
    </Switch>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
