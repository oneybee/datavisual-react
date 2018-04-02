import React, {component} from 'react';

export default function BottomNavCompoonent() {
  return (
      <div id="blogmenu" className="bottom-nav">
        <div className="row">
          <div className="col-3">
            <a href="#">
              <span className="chief-mate chief-mate-user"></span>
              <p>About</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <span className="chief-mate chief-mate-bar-graph"></span>
              <p>골득실</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <span className="chief-mate chief-mate-circular-graph"></span>
              <p>입력정보</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <span className="chief-mate chief-mate-github"></span>
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
  );
}


