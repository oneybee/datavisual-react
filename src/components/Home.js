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
      <p style={s.p}>
        프로그래밍 언어 순위를 알아보자
      </p>
      <p style={s.p}>
        data를 찾는데 있어서 참고한 {datalink('사이트')}
      </p>
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
    </div>
  );
}
