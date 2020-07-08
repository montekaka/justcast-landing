import React from "react";
import {localStorageManagement} from '../libs'
import PrivatePodcastWelcome from './../components/landingpages/PrivatePodcastWelcome'
import PrivatePodcastHowItWorks from './../components/landingpages/PrivatePodcastHowItWorks'

const PrivatePodcastPage = () => {
  return (
    <>
      <PrivatePodcastWelcome/>
      <PrivatePodcastHowItWorks/>
    </>
  )
}

export default PrivatePodcastPage