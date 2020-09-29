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
import Affiliate from './../landingpages/Affiliate'
import AboutUs from './../landingpages/AboutUs'
import Examples from './../landingpages/Examples'
import BlogPost from './../landingpages/BlogPost'
import HowJustCastWorks from './../landingpages/HowJustCastWorks'
import SingleWidgetPlayer from './../widgets/SingleWidgetPlayer'
import WidgetPlaylist from './../widgets/WidgetPlaylist'
import PrivatePodcast from './../podcasters/PrivatePodcast'
import PrivatePodcastInvite from './../podcasters/PrivatePodcastInvite'
import PublicPodcast from './../podcasters/PublicPodcast'
import PrivatePodcastPage from './../landingpages/PrivatePodcastPage'
import AudiogramPage from '../landingpages/AudiogramPage'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/page_404" component={PodcastPrivate}/>
      <PodcastPageRoute exact path="/shows/:id/about_us" component={PodcastAbout}/>
      <PodcastPageRoute exact path="/shows/:id/episodes" component={Episodes}/>
      <PodcastPageRoute exact path="/shows/:id/audioposts" component={Podcast}/>
      <PodcastPageRoute exact path="/shows/:id/subscribe" component={SubscribePage}/>
      <PodcastPageRoute exact path="/shows/:show_id/audioposts/:id" component={Episode}/>
      <Route exact path="/shows/:show_id/subscribers/:id" component={PrivatePodcast}/>
      <Route exact path="/shows/:show_id/subscribers_invite" component={PrivatePodcastInvite}/>
      <Route exact path="/podcasts/:show_id/" component={PublicPodcast}/>
      <Route exact path="/widget/:show_id/audioposts/:id" component={SingleWidgetPlayer} />
      <Route exact path="/widget/:id/audioposts" component={WidgetPlaylist} />
      <LandingPageRoute exact path="/" component={Home}/>
      <LandingPageRoute exact path="/features-pricing" component={Pricing}/>
      <LandingPageRoute exact path="/terms" component={TermsOfService}/>
      <LandingPageRoute exact path="/privacy" component={Privacy}/>
      <LandingPageRoute exact path="/about_us" component={AboutUs}/>
      <LandingPageRoute exact path="/examples" component={Examples}/>
      <LandingPageRoute exact path="/affiliates" component={Affiliate}/>
      <LandingPageRoute exact path="/blogs/resources-for-church-impacted-by-coronavirus" component={BlogPost}/>
      <LandingPageRoute exact path="/how-justcast-works" component={HowJustCastWorks}/>
      <LandingPageRoute exact path="/private-podcast" component={PrivatePodcastPage}/>
      <LandingPageRoute exact path="/audiogram" component={AudiogramPage}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;
