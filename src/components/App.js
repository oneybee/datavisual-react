import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutComponent from './About';
import PageNotFound from './PageNotFound';


export default function App() {
  return (
    <div>
      <div className="headicon"> 
        <i class="fab fa-audible"></i> <i class="fas fa-wifi"></i> <i class="fas fa-battery-full"></i>
      </div>
      <div className="head">
        <i class="fas fa-bars fa-2x"></i>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
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
