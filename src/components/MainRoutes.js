import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import Podcast from './../pages/Podcast'
import Episode from './../pages/Episode'
import Error from './../pages/Error'

const MainRoutes = () => {
  return (
    <Switch>
      <PodcastPageRoute exact path="/shows/:id/audioposts" component={Podcast}/>
      <PodcastPageRoute exact path="/shows/:show_id/audioposts/:id" component={Episode}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;