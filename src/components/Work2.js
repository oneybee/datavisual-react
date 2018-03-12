import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Work1 from './Work2';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';


const data = [
      {name: '1998', 순위: 21},
      {name: '2003', 순위: 7},
      {name: '2008', 순위: 8},
      {name: '2013', 순위: 9},
      {name: '2018', 순위: 7},

];

const ExamplePageText = () => (
  <p style={s.p}>
        <AreaChart width={700} height={350} data={data}
              margin={{top: 50, right: 30, left: 0, bottom: 20}}>
          <XAxis dataKey="name"/>
          <YAxis dataKey="순위"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='순위' stroke='#31B404' fill='#2EFE64' />
        </AreaChart>
       
  JavaScript의 순위변화
  </p>
);

export default function ExampleComponent() {
  return (
    <Switch>
      
      <Route
        exact path="/Work2"
        render={() => (
          <div>
            <ExamplePageText />
            <div style={s.pageLinkContainer}>             
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
