import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import LandingPageRoute from './LandingPageRoute';
import Podcast from './../pages/Podcast'
import Episode from './../pages/Episode'
import Episodes from './../pages/Episodes'
import SubscribePage from './../pages/SubscribePage'
import PodcastAbout from './../pages/PodcastAbout'
import PodcastPrivate from './../pages/PodcastPrivate'
import Error from './../pages/Error'
import Home from './../landingpages/Home'
import Pricing from './../landingpages/Pricing'
import TermsOfService from './../landingpages/TermsOfService'
import Privacy from './../landingpages/Privacy'
import AboutUs from './../landingpages/AboutUs'
import Examples from './../landingpages/Examples'
import BlogPost from './../landingpages/BlogPost'
import HowJustCastWorks from './../landingpages/HowJustCastWorks'
import SingleWidgetPlayer from './../widgets/SingleWidgetPlayer'
import WidgetPlaylist from './../widgets/WidgetPlaylist'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/page_404" component={PodcastPrivate}/>
      <PodcastPageRoute exact path="/shows/:id/about_us" component={PodcastAbout}/>
      <PodcastPageRoute exact path="/shows/:id/episodes" component={Episodes}/>
      <PodcastPageRoute exact path="/shows/:id/audioposts" component={Podcast}/>
      <PodcastPageRoute exact path="/shows/:id/subscribe" component={SubscribePage}/>
      <PodcastPageRoute exact path="/shows/:show_id/audioposts/:id" component={Episode}/>      
      <Route exact path="/widget/:show_id/audioposts/:id" component={SingleWidgetPlayer} />
      <Route exact path="/widget/:id/audioposts" component={WidgetPlaylist} />
      <LandingPageRoute exact path="/" component={Home}/>
      <LandingPageRoute exact path="/features-pricing" component={Pricing}/>
      <LandingPageRoute exact path="/terms" component={TermsOfService}/>
      <LandingPageRoute exact path="/privacy" component={Privacy}/>
      <LandingPageRoute exact path="/about_us" component={AboutUs}/>
      <LandingPageRoute exact path="/examples" component={Examples}/>
      <LandingPageRoute exact path="/blogs/resources-for-church-impacted-by-coronavirus" component={BlogPost}/>
      <LandingPageRoute exact path="/how-justcast-works" component={HowJustCastWorks}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;
