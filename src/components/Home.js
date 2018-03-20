import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const datalink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://www.tiobe.com/tiobe-index/"
      >{text}</Interactive>
);
 

  return (
    <div>


      <div>
      <p id="first">
      <a href="/Work2"
      >2015-2016</a>
      </p>
      </div>

      <div>
      <h4>
      Users by Location
      </h4>
      </div>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/Work1"
        >Feb 2018</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/Work2"
        >JavaScript 순위변화</Interactive>
      </div>

      <div id="blogmenu">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">CPanel</a></li>
          <li><a href="#">Messages</a></li>
        </ul>
      </div>

    </div>
  );
}
