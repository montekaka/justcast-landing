import React from "react";
import LandingPageHero from './../components/LandingPageHero'
import LandingPageAbout from './../components/LandingPageAbout'
import LandingPageTestimonials from './../components/LandingPageTestimonials'

const Home = () => {
  return (
    <>
      <LandingPageHero/>
      <LandingPageAbout/>
      <LandingPageTestimonials/>          
    </>
  )
}

export default Home;