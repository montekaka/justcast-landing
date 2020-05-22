import React from "react";
import {Mixpanel} from '../api/mixpanel'
import LandingPageHero from './../components/landingpages/LandingPageHero'
import LandingPageAbout from './../components/landingpages/LandingPageAbout'
import LandingPageTestimonials from './../components/landingpages/LandingPageTestimonials'
import LandingPagePricing from './../components/landingpages/LandingPagePricing'
import LandingPageDashboardDemo from './../components/landingpages/LandingPageDashboardDemo'
import LandingPageWidgetDemo from './../components/landingpages/LandingPageWidgetDemo'
import LandingPageFeatures from './../components/landingpages/LandingPageFeatures'

const Home = () => {
  Mixpanel.track('Landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });
  return (
    <>
      <LandingPageHero/>
      <LandingPageAbout/>
      <LandingPageTestimonials/>
      <LandingPageFeatures/>
      <LandingPageDashboardDemo/>
      <LandingPagePricing/>
    </>
  )
}

export default Home;