import React, {Component} from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Work1 from './Work2';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';


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
          data:responseJson.standing
        })
        console.log(this.state.data)
      })
    }
  render() {
    return (
      <div>
        {
          this.state.data.map( (dynamicData,key)=>
          <div>
            <span>{dynamicData.teamName} goals: </span>
            
            <span>{
              dynamicData.goals
            }</span>

            </div>

          )
        }

      </div>
    )
  }
}

export default Work2;