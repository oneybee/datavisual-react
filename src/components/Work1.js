import React, {component} from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import Work2 from './Work2';
import s from '../styles/exampleComponent.style';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];



const ExamplePageText = () => (
  <p style={s.p}>
      <LineChart width={600} height={300} data={data}>
       <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
  Feb 2018 전세계의 엔지니어, 코스 등의 순위를 기반으로한 상위 6개의 프로그래밍 언어
  </p>
);

export default function ExampleComponent() {
  return (
    <Switch>
      
      <Route
        exact path="/Work1"
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
