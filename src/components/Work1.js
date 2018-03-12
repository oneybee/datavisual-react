import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import Work2 from './Work2';
import s from '../styles/exampleComponent.style';
import {PieChart, Pie, Legend, Tooltip} from 'Recharts';

const data01 = [{name: 'Java', value: 14.988}, {name: 'C', value: 11.857},
                  {name: 'C++', value: 5.726}, {name: 'Python', value: 5.726},
                  {name: 'C#', value: 4.453}, {name: 'Visual Basic .NET', value: 4.072}
                
                  ]



const ExamplePageText = () => (
  <p style={s.p}>
      <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={120} fill="#003399" label/>

        <Tooltip/>
       </PieChart>
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
