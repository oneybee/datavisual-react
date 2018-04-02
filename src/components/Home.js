import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Link, Route } from 'react-router-dom';
// import { Code } from '../styles/style';
// import s from '../styles/home.style';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import { PieChart, Pie, Sector, Cell } from 'Recharts';


const data = [{name: 'Group A', value: 36}, {name: 'Group B', value: 58},
                  {name: 'Group C', value: 6}];
const COLORS = ['rgb(137, 166, 255)','rgba(250,250,250,.9)', 'rgb(255,151,134)'];



var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}


class Work2 extends Component {
  
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    return fetch('http://api.football-data.org/v1/competitions/394/leagueTable',obj)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: [
            {name: 'Bayern', goalsAgainst: responseJson.standing[0].goalsAgainst, goals: responseJson.standing[0].goals, amt: 2400},
            {name: 'BVB', goalsAgainst: responseJson.standing[1].goalsAgainst, goals: responseJson.standing[1].goals, amt: 2210},
            {name: 'Leverkusen', goalsAgainst: responseJson.standing[2].goalsAgainst, goals: responseJson.standing[2].goals, amt: 2290},
            {name: 'Gladbach', goalsAgainst: responseJson.standing[3].goalsAgainst, goals: responseJson.standing[3].goals, amt: 2000},
              ]
          })
        this.setState( );
        console.log(this.state.data)
      })
    }
  render() {
    return (
      <div className="home">
        <a className="h"><p>Analytics</p></a>
      <div> <img src="box.png"/> </div>
        <h1> Users by Location </h1>
        <PieChart width={275} height={85} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}

          cx={60} 
          cy={60} 
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
        <div> <h1>2015-2016 시즌 분데스리가 상위 7팀 득점, 실점</h1> </div>
        <div className="custom_rechart">
          <LineChart width={335} height={200} data={this.state.data}>
          <XAxis dataKey="name" />
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="goals" stroke="rgb(137, 166, 255)" />
          <Line type="monotone" dataKey="goalsAgainst" stroke="rgb(255, 151, 134)" />
          </LineChart>
        </div>
        {
          this.state.data.map( (dynamicData,key)=>
          <div key={key}>
            {console.log('dynamicData', dynamicData)}
          </div>
          )
        }      
      </div>
    )
  }
}

export default Work2;