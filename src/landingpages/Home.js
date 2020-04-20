import React from "react";
import {Mixpanel} from '../api/mixpanel'
import LandingPageHero from './../components/landingpages/LandingPageHero'
import LandingPageAbout from './../components/landingpages/LandingPageAbout'
import LandingPageTestimonials from './../components/landingpages/LandingPageTestimonials'
import LandingPagePricing from './../components/landingpages/LandingPagePricing'
import LandingPageDashboardDemo from './../components/landingpages/LandingPageDashboardDemo'
import LandingPageWidgetDemo from './../components/landingpages/LandingPageWidgetDemo'

const Home = () => {
  Mixpanel.track('Landing page loaded');
  return (
    <>
      <LandingPageHero/>
      <LandingPageAbout/>
      <LandingPageTestimonials/>
      <LandingPageWidgetDemo/>
      <LandingPageDashboardDemo/>
      <LandingPagePricing/>
    </>
  )
}

export default Home;