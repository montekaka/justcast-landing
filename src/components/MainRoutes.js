import React from "react";
import { Switch, Route } from 'react-router-dom'
import LandingPageRoute from './LandingPageRoute';
import Home from './../pages/Home'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  )
}

export default MainRoutes;