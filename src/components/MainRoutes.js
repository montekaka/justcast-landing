import React from "react";
import { Switch, Route } from 'react-router-dom'
import PodcastPageRoute from './PodcastPageRoute';
import LandingPageRoute from './LandingPageRoute';
import {PodcastPageRoute as PublicPodcastPageRoute} from './Routes'
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
import MobilePlayer from './../widgets/MobilePlayer'
import PrivatePodcast from './../podcasters/PrivatePodcast'
import PrivatePodcastInvite from './../podcasters/PrivatePodcastInvite'
import PublicPodcast from './../podcasters/PublicPodcast'
import PrivatePodcastPage from './../landingpages/PrivatePodcastPage'
import SoicalNetworkIntegrationPage from './../landingpages/SoicalNetworkIntegrationPage'
import AudiogramPage from '../landingpages/AudiogramPage'
import {Home as PublicPodcastHome, 
  Episodes as PublicPodcastEpisodes,
  Episode as PublicPodcastEpisode,
  About as PublicPodcastAbout,
  Subscribe as PublicPodcastSubscribe,
  Tipjar as PublicPodcastTipjar
} from '../podcastpages'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/page_404" component={PodcastPrivate}/>
      <PublicPodcastPageRoute exact path="/shows/:id/audioposts" component={PublicPodcastHome}/>
      <PublicPodcastPageRoute exact path="/shows/:id/about_us" component={PublicPodcastAbout}/>
      <PublicPodcastPageRoute exact path="/shows/:id/episodes" component={PublicPodcastEpisodes}/>      
      <PublicPodcastPageRoute exact path="/shows/:id/subscribe" component={PublicPodcastSubscribe}/>
      <PublicPodcastPageRoute exact path="/shows/:show_id/audioposts/:id" component={PublicPodcastEpisode}/>
      <PublicPodcastPageRoute exact path="/shows/:id/support_us" component={PublicPodcastTipjar}/>
      <Route exact path="/shows/:show_id/subscribers/:id" component={PrivatePodcast}/>
      <Route exact path="/shows/:show_id/subscribers_invite" component={PrivatePodcastInvite}/>
      <Route exact path="/podcasts/:show_id/" component={PublicPodcast}/>
      <Route exact path="/widget/:show_id/audioposts/:id" component={SingleWidgetPlayer} />
      <Route exact path="/widget/:id/audioposts" component={WidgetPlaylist} />
      <Route exact path="/mobile-player-widget/:id/audioposts" component={MobilePlayer} />
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
      <LandingPageRoute exact path="/integration-twitter" component={SoicalNetworkIntegrationPage}/>
      <LandingPageRoute exact path="/audiogram" component={AudiogramPage}/>
      <Route path="/" component={Error}/>
    </Switch>
  )
}

export default MainRoutes;
