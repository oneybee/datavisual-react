import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Work1 from './Work2';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import { LineChart, Line } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


const Work2Text = () => (
  <p style={s.p}>
    2015-2016시즌 성적
  </p>
);

const data = [
      {name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},
];

const data_radar = [
    { subject: 'Math', A: 1, B: 110, fullMark: 300 },
    { subject: 'Chinese', A: 2, B: 130, fullMark: 300 },
    { subject: 'English', A: 3, B: 130, fullMark: 300 },
    { subject: 'Geography', A: 4, B: 100, fullMark: 300 },
    { subject: 'Physics', A: 5, B: 90, fullMark: 300 },
    { subject: 'History', A: 2, B: 85, fullMark: 300 },
];

var data_ow = [];
var teamName = '';

var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}

class Work2 extends Component {


  constructor() {
    super();
    this.state={
      data:[],
      loading: false,
    }
    this.fetchDatas();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  fetchDatas(teamName) {
    fetch('http://api.football-data.org/v1/competitions/394/leagueTable', obj).
    then((Resoponse)=>Resoponse.json()).
    then((findresponse)=> {
      console.log('findresponse.standing', findresponse.standing)
      // data_ow = [
      //     { subject: 'position', A: findresponse.standing.positon, B: 110, fullMark: 300 },
      //     { subject: 'points', A: findresponse.standing.points, B: 130, fullMark: 300 },
      //     { subject: 'goals', A: findresponse.standing.goals, B: 130, fullMark: 300 },
      //     { subject: 'goalsAgainst', A: findresponse.standing.goalsAgainst, B: 100, fullMark: 300 },
      //     { subject: 'wins', A: findresponse.standing.wins, B: 100, fullMark: 300 },
      // ];
      this.setState({
        owdata:findresponse.standing,
        loading: false,
      })

    })
    
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    teamName = this.state.value;
    this.setState({loading: true});
    this.render();
    // this.fetchDatas(teamName);
    event.preventDefault();
  }
  render() {
    console.log('teamName : ' + teamName);
    console.log('this.state.owdata : ' + this.state.owdata);
    if (!this.state.loading && this.state.owdata == undefined) return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            2015-2016 성적:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
    else if (this.state.loading) return (
      <p>Data Loading...</p>
    )
    else
    return (
      <Switch>
      <Route
        exact path="/Work2"
        render={() => (
          <div>

            <RadarChart cx={300} cy={250} outerRadius={200} width={600} height={500} data={data_ow}>
              <PolarGrid />
              <Tooltip/>
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis/>
              <Radar name={teamName} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            </RadarChart>
          </div>
        )}
      />
    </Switch>
    );
  }
}

export default Work2;