import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Link, Route } from 'react-router-dom';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';
import { PieChart, Pie, Sector, Cell } from 'Recharts';
import { log } from 'ruucm-util'

const data = [{name: 'wins', value: 28}, {name: 'losses', value: 2}, {name: 'draws', value:4}
                 ];
const data01 = [{name: 'wins', value: 24}, {name: 'losses', value: 4},{name: 'draws', value:6}
                 ];
const data02 = [{name: 'wins', value: 18}, {name: 'losses', value: 10},{name: 'draws', value:6}
                 ];
const data03 = [{name: 'wins', value: 17}, {name: 'losses', value: 13},{name: 'draws', value:4}
                 ];                
const COLORS = ['rgb(137, 166, 255)', 'rgb(255,151,134)', 'rgb(235,235,235)'];


var obj = {  
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d'
  },
}

const dataA = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
var ary = [
  {name: '2015-2016', wins: 0},
  {name: '2016-2017', wins: 0},
  {name: '2017-2018', wins:0}
];
class HomeComponent extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      bayernWins: ary,
    }
  }
  componentDidMount() {

    // right values
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[0] = {name: '2015-2016',wins: responseJson.standing[0].wins}
      this.setState({
        bayernWins: ary,
      });
    })
    fetch('https://api.football-data.org/v1/competitions/452/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[1] = {name: '2016-2017', wins: responseJson.standing[1].wins}
      this.setState({
        bayernWins: ary,
      });
    })
    fetch('https://api.football-data.org/v1/competitions/430/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      ary[2] = {name: '2017-2018', wins: responseJson.standing[2].wins}
      this.setState({
        bayernWins: ary,
      });
    })
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable',obj)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: [
            {name: 'Bayern', goalsAgainst: responseJson.standing[0].goalsAgainst, goals: responseJson.standing[0].goals, wins: responseJson.standing[0].wins, draws: responseJson.standing[0].draws, losses: responseJson.standing[0].losses },
            {name: 'BVB', goalsAgainst: responseJson.standing[1].goalsAgainst, goals: responseJson.standing[1].goals, wins: responseJson.standing[1].wins, draws: responseJson.standing[1].draws, losses: responseJson.standing[1].losses},
            {name: 'Leverkusen', goalsAgainst: responseJson.standing[2].goalsAgainst, goals: responseJson.standing[2].goals, wins: responseJson.standing[2].wins, draws: responseJson.standing[2].draws, losses: responseJson.standing[2].losses},
            {name: 'Gladbach', goalsAgainst: responseJson.standing[3].goalsAgainst, goals: responseJson.standing[3].goals, wins: responseJson.standing[3].wins, draws: responseJson.standing[3].draws, losses: responseJson.standing[3].losses},
              ]
          })
        this.setState();
      })
  }
  render() {
    return (
      <div className="home">
        <div className="section-02">          
          <h1> 15-16 분데스리가 팀별 승리, 패배 횟수 </h1>
          <div className="row piechart-text-label-wrapper">
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data[1]['value']}</span>
              <PieChart width={85} height={85}>
                <Pie
                  data={data}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
                Bayern </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data01[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data01[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  data={data01}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
                BVB </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data02[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data02[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  data={data02}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
                Leverkusen </text>
              </PieChart>
            </div>
            <div className="col-3">
              <span className="piechart-text-label"><div className="label-point win"></div>{data03[0]['value']}</span>
              <span className="piechart-text-label"><div className="label-point loss"></div>{data03[1]['value']}</span>
              <PieChart width={93} height={85}>
                <Pie
                  data={data03}
                  cx={40} 
                  cy={40} 
                  innerRadius={24}
                  outerRadius={30} 
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <text className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
                Gladbach </text>
              </PieChart>
            </div>
          </div>
        </div> 
        <div className="section-03">
          {log('this.state.bayernWins', this.state.bayernWins)}
          <a className="font">
            <div>
              <p>2015-2017</p>
              <span className="piechart-text-label"><div className="label-point win"></div></span>
            </div>
            <p>바이에른뮌헨의 최근 리그 승리 횟수</p>
          </a>
          <div className="areachart">
              {(this.state.bayernWins[0]['wins'] != 0 
              && this.state.bayernWins[1]['wins'] != 0
              && this.state.bayernWins[2]['wins'] != 0)? (
              <AreaChart width={335} height={250} data={this.state.bayernWins}
              margin={{top: 5, right: 0, left: 0, bottom: 5}}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(137, 166, 255)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="rgb(137, 166, 255)" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <Tooltip/>
                <Area type='monotone' dataKey='wins' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            ):('loading...')}

{/* <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart> */}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeComponent;