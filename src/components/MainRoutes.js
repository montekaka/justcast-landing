import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import Podcast from './../pages/Podcast'
import Episode from './../pages/Episode'
import Episodes from './../pages/Episodes'
import PodcastAbout from './../pages/PodcastAbout'
import Error from './../pages/Error'

const MainRoutes = () => {
  return (
    <Switch>
      <PodcastPageRoute exact path="/shows/:id/about_us" component={PodcastAbout}/>
      <PodcastPageRoute exact path="/shows/:id/episodes" component={Episodes}/>
      <PodcastPageRoute exact path="/shows/:id/audioposts" component={Podcast}/>
      <PodcastPageRoute exact path="/shows/:show_id/audioposts/:id" component={Episode}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;
