import React, {component} from 'react';

export default function HeaderComponent() {
  return (
    <div className="header"> 
      <div className="nav">
        <span className="chief-mate chief-mate-menu"></span>
        <a className="profile-img"><img src="assets/images/profile.jpg"/></a>
      </div>
      
      <div className="info-banner">
        <a className="section-title"><p>2015-2016 분데스리가</p></a>
        <div className="item item-01">
          <div className="item-inner">
            <h1>15-16</h1>
            <p>리그 34경기</p>
          </div>
        </div>
        <div className="item item-02">
          <div className="item-inner">
            <h1>챔피언</h1>
            <p>Bayern</p>
          </div>
        </div>
      </div>
    </div>
  );
}
