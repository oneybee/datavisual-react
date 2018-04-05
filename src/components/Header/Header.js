import React, {component} from 'react';

export default function HeaderComponent() {
  return (
    <div className="header"> 
      <div className="nav">
        <span className="chief-mate chief-mate-menu"></span>
        <a className="profile-img"><img src="assets/images/profile.jpg"/></a>
      </div>
    </div>
  );
}
