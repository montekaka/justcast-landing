import React from "react";
import {Mixpanel} from '../api/mixpanel'
import ShapeHeader from './../components/ShapeHeader'
import LandingPageSecretPricing from './../components/landingpages/LandingPageSecretPricing'

const SecretPricing = () => {
  Mixpanel.track('Secret Pricing page loaded');

  return (
    <>
      <ShapeHeader
        title={"Features & Pricing"}
        subtitle="From your first listener to your first million, JustCast provides powerful tools needed to manage, distribute, share, and grow your podcast."/>
        <LandingPageSecretPricing sectionClassName="mt-n8 mt-md-n14" titleColor="text-white-80"/>
    </>
  )
}

export default SecretPricing;