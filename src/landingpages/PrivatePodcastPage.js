import React from "react";
import {localStorageManagement} from '../libs'
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import PrivatePodcastHowItWorks from './../components/landingpages/PrivatePodcastHowItWorks'
import TryPodcastingForFree from './../components/TryPodcastingForFree'

const PrivatePodcastPage = () => {
  return (
    <>
      <PrivatePodcastWelcome/>
      <PrivatePodcastHowItWorks/>
      <TryPodcastingForFree/>
    </>
  )
}

export default PrivatePodcastPage