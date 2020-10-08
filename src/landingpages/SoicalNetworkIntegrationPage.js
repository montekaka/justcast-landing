import React from "react";
import {Mixpanel} from '../api/mixpanel'
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import TwitterHowItWorks from './../components/landingpages/TwitterHowItWorks'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const SocialNetworkIntegrationPage = () => {

  Mixpanel.track('Social network integration landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  return (
    <>
      <PrivatePodcastWelcome 
        title={"Twitter Integration"} 
        imageUrl={"https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80"}
      />
      <TwitterHowItWorks/>
      <TryPodcastingForFree/>
    </>
  )
}

export default SocialNetworkIntegrationPage