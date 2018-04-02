import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Work1 from './Work1';
import Work2 from './Work2';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
// import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      <div id="head">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <nav>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Work1" component={Work1} />
        <Route path="/Work2" component={Work2} />
        <Route component={PageNotFound} />
      </Switch>

      <div id="blogmenu" className="bottom-nav">
        <div className="row">
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              <p>Dashboard</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="far fa-chart-bar fa-2x"></i>
              <p>Dashboard</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="fas fa-align-right fa-2x"></i>
              <p>Dashboard</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              <p>Dashboard</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
