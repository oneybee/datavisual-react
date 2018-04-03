import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Link, Route } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import { PieChart, Pie, Sector, Cell } from 'Recharts';


const data = [{name: 'golas', value: 80}, {name: 'goalsAgainst', value: 17},
                 ];

const data01 = [{name: 'golas', value: 82}, {name: 'goalsAgainst', value: 34},
                 ];
const data02 = [{name: 'golas', value: 56}, {name: 'goalsAgainst', value: 40},
];
const data03 = [{name: 'golas', value: 67}, {name: 'goalsAgainst', value: 50},
];                

const COLORS = ['rgb(137, 166, 255)', 'rgb(255,151,134)'];


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
          innerRadius={20}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Pie
          data={data01} 
          cx={130} 
          cy={40} 
          innerRadius={20}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Pie
          data={data02} 
          cx={220} 
          cy={40} 
          innerRadius={20}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Pie
          data={data03} 
          cx={310} 
          cy={40} 
          innerRadius={20}
          outerRadius={30} 
          fill="#8884d8"
          paddingAngle={0}
        >
        	{
          	data03.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
        <div className="section-03"> <h1>2015-2016 시즌 분데스리가 상위 4팀 득점, 실점</h1> </div>
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