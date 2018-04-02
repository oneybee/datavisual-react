import React, {component} from 'react';

export default function BottomNavCompoonent() {
  return (
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
  );
}


