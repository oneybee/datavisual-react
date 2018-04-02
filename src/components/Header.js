import React, {component} from 'react';

// import profileImg from '../../assets/images/profile.jpg';


export default function HeaderComponent() {
  return (
    <div className="header"> 
      <span className="chief-mate chief-mate-menu"></span>
      <a className="profile-img"><img src="assets/images/profile.jpg"/></a>
    </div>
  );
}
