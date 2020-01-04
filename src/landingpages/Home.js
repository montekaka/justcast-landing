import React from "react";
import LandingPageHero from './../components/landingpages/LandingPageHero'
import LandingPageAbout from './../components/landingpages/LandingPageAbout'
import LandingPageTestimonials from './../components/landingpages/LandingPageTestimonials'
import LandingPagePricing from './../components/landingpages/LandingPagePricing'
import LandingPageDashboardDemo from './../components/landingpages/LandingPageDashboardDemo'

const Home = () => {
  return (
    <>
      <LandingPageHero/>
      <LandingPageAbout/>
      <LandingPageTestimonials/>
      <LandingPageDashboardDemo/>
      <LandingPagePricing/>      
    </>
  )
}

export default Home;