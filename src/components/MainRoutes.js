import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import Home from './../pages/Home'
import Error from './../pages/Error'

const MainRoutes = () => {
  return (
    <Switch>      
      <PodcastPageRoute exact path="/shows" component={Home}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;