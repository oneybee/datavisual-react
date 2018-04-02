import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './Home';
import AboutComponent from './About';
import PageNotFound from './PageNotFound';


export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
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
