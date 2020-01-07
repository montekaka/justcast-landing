import React from "react";
import {Mixpanel} from '../api/mixpanel'
import ShapeHeader from './../components/ShapeHeader'
import LandingPagePricing from './../components/landingpages/LandingPagePricing'

const Pricing = () => {
  Mixpanel.track('Pricing page loaded');

  return (
    <>
      <ShapeHeader 
        title={"Features & Pricing"} 
        subtitle="From your first listener to your first million, JustCast provides powerful tools needed to manage, distribute, share, and grow your podcast."/>
      <LandingPagePricing sectionClassName="mt-n8 mt-md-n14" titleColor="text-white"/>
    </>
  )
}

export default Pricing;