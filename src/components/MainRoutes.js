import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import Podcast from './../pages/Podcast'
import Error from './../pages/Error'

const MainRoutes = () => {
  return (
    <Switch>
      <PodcastPageRoute exact path="/shows/:id" component={Podcast}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;