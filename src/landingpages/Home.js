import React from "react";
import LandingPageHero from './../components/LandingPageHero'
import LandingPageAbout from './../components/LandingPageAbout'
import LandingPageTestimonials from './../components/LandingPageTestimonials'
import LandingPagePricing from './../components/LandingPagePricing'

const Home = () => {
  return (
    <>
      <LandingPageHero/>
      <LandingPageAbout/>
      <LandingPageTestimonials/>
      <LandingPagePricing/>
    </>
  )
}

export default Home;