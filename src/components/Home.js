import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Link, Route } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import { PieChart, Pie, Sector, Cell } from 'Recharts';


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


class HomeComponent extends Component {
  
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
            {name: 'Bayern', goalsAgainst: responseJson.standing[0].goalsAgainst, goals: responseJson.standing[0].goals, wins: responseJson.standing[0].wins, draws: responseJson.standing[0].draws, losses: responseJson.standing[0].losses },
            {name: 'BVB', goalsAgainst: responseJson.standing[1].goalsAgainst, goals: responseJson.standing[1].goals, wins: responseJson.standing[1].wins, draws: responseJson.standing[1].draws, losses: responseJson.standing[1].losses},
            {name: 'Leverkusen', goalsAgainst: responseJson.standing[2].goalsAgainst, goals: responseJson.standing[2].goals, wins: responseJson.standing[2].wins, draws: responseJson.standing[2].draws, losses: responseJson.standing[2].losses},
            {name: 'Gladbach', goalsAgainst: responseJson.standing[3].goalsAgainst, goals: responseJson.standing[3].goals, wins: responseJson.standing[3].wins, draws: responseJson.standing[3].draws, losses: responseJson.standing[3].losses},
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
        <div className="section-01">
          {/* <img src="box.png"/> */}
          <div className="item item-01">
            <div className="item-inner">
              <h1>25</h1>
              <p>Active User</p>
            </div>
          </div>
          <div className="item item-02">
            <div className="item-inner">
              <h1>25</h1>
              <p>Active User</p>
            </div>
          </div>
          {/* <div className="item item-03">
            <h1>25</h1>
            <p>Active User</p>
          </div>
          <div className="item item-04">
            <h1>25</h1>
            <p>Active User</p>
          </div> */}
        </div>
        <div className="section-02">          
          <h1> Users by Location </h1>
        </div> 
          
        <PieChart width={375} height={85} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={40} 
          cy={40} 
          innerRadius={25}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
          <text fontFamily='HiraginoSans-W3' x={45} y={50} textAnchor="middle" dominantBaselin="middle">
          Bayern </text>
        <Pie
          data={data01} 
          cx={130} 
          cy={40} 
          innerRadius={25}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
          <text fontFamily='HiraginoSans-W3' x={135} y={50} textAnchor="middle" dominantBaselin="middle">
          BVB </text>
        <Pie
          data={data02} 
          cx={220} 
          cy={40} 
          innerRadius={25}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
          <text fontFamily='HiraginoSans-W3' x={225} y={50} textAnchor="middle" dominantBaselin="middle">
          Leverkusen </text>
        <Pie
          data={data03} 
          cx={310} 
          cy={40} 
          innerRadius={25}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
          <text fontFamily='HiraginoSans-W3' x={315} y={50} textAnchor="middle" dominantBaselin="middle">
          Gladbach </text>
      </PieChart>
        <div className="section-03"> <a className="font"><p>2015-2016 시즌 분데스리가 상위 4팀 득점, 실점</p></a> </div>
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

export default HomeComponent;