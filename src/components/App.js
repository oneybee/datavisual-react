import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './Home';
import AboutComponent from './About';
import HeaderComponent from './Header';
import PageNotFound from './PageNotFound';
import BottomNavComponent from './BottomNav';


export default function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route component={PageNotFound} />
      </Switch>
      <BottomNavComponent />
    </div>
  );
}
