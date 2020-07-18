import React, {useEffect, useContext} from "react";
import {Mixpanel} from '../api/mixpanel'
import queryString from 'query-string'
import {localStorageManagement} from './../libs/'
import {Context as LocalStorageContext} from '../context/LocalStorageContext'
import LandingPageHero from './../components/landingpages/LandingPageHero'
import LandingPageAbout from './../components/landingpages/LandingPageAbout'
import LandingPageTestimonials from './../components/landingpages/LandingPageTestimonials'
import LandingPagePricing from './../components/landingpages/LandingPagePricing'
import LandingPageDashboardDemo from './../components/landingpages/LandingPageDashboardDemo'
import LandingPageWidgetDemo from './../components/landingpages/LandingPageWidgetDemo'
import LandingPageFeatures from './../components/landingpages/LandingPageFeatures'


const Home = (props) => {
  const {state, initLocalStorageState, add} = useContext(LocalStorageContext);

  Mixpanel.track('Landing page loaded', {"First Time": "TRUE"}, () => {
    setTimeout(Mixpanel.register({"First Time": "FALSE"}), 500);
  });

  // google ads url example
  // https://www.justcast.com/?utm_campaign=172194957&utm_source=google&utm_medium=cpc&utm_content=433113468884&utm_term=making%20podcasts&adgroupid=9866620317&gclid=EAIaIQobChMI77y4p6bT6gIVsCCtBh1iCQPgEAAYBCAAEgLlGPD_BwE

  useEffect(() => {
    const values = queryString.parse(props.location.search);
    if(values && values["via"]) {
      const via = values['via'];
      initLocalStorageState({via})
    } else if (values && values["utm_term"]) {
      const utm_term = values['utm_term'];
      initLocalStorageState({utm_term})      
    }
    else {
      initLocalStorageState({})
    }
  }, []);

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