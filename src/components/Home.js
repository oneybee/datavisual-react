import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Link, Route } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
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


class HomeComponent extends Component {
  
  constructor() {
    super()
    this.state = {
      data: [],
      bayernWins: {
        fifteen: 0,
        sixteen: 0,
        seventeen: 0,
      },
    }
  }
  componentDidMount() {

    // right values
    fetch('http://api.football-data.org/v1/competitions/394/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      log('responseJson(394 - 2015) !!!', responseJson.standing[0].wins);
      this.setState({bayernWins: {
        fifteen: responseJson.standing[0].wins,
        sixteen: this.state.bayernWins['sixteen'],
        seventeen: this.state.bayernWins['seventeen'],
      }})
    })
    fetch('http://api.football-data.org/v1/competitions/452/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      log('responseJson(452) !!!', responseJson);
      this.setState({bayernWins: {
        fifteen: this.state.bayernWins['fifteen'],
        sixteen: responseJson.standing[0].wins,
        seventeen: this.state.bayernWins['seventeen'],
      }})
    })
    fetch('http://api.football-data.org/v1/competitions/430/leagueTable',obj)
    .then((response) => response.json())
    .then((responseJson) => {
      log('responseJson(430) !!!', responseJson);
      this.setState({bayernWins: {
        fifteen: this.state.bayernWins['fifteen'],
        sixteen: this.state.bayernWins['sixteen'],
        seventeen: responseJson.standing[0].wins,
      }})
    })
    fetch('http://api.football-data.org/v1/competitions/394/leagueTable',obj)
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
        </div>
        <div className="section-02">          
          <h1> Users by Location </h1>
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
                <text fontFamily='HiraginoSans-W3' className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
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
                <text fontFamily='HiraginoSans-W3' className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
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
                <text fontFamily='HiraginoSans-W3' className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
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
                <text fontFamily='HiraginoSans-W3' className="piechart-label" x={45} y={50} textAnchor="middle" dominantBaselin="middle">
                Gladbach </text>
              </PieChart>
            </div>
          </div>
        </div> 
        <div className="section-03">
          {log('this.state.bayernWins', this.state.bayernWins)}
          {this.state.bayernWins['fifteen']}
          {this.state.bayernWins['sixteen']}
          {this.state.bayernWins['seventeen']}
          <a className="font">
            <div>
              <p>2015-2016</p>
              <span className="piechart-text-label"><div className="label-point win"></div></span>
            </div>
            <p>시즌 분데스리가 상위 4팀 득점, 실점</p>
          </a>
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
        </div>
      </div>
    )
  }
}

export default HomeComponent;