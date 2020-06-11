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

  useEffect(() => {
    // initLocalStorageState()

    const values = queryString.parse(props.location.search);
    if(values && values["via"]) {
      const via = values['via'];
      // localStorageManagement.setItem('via', via);
      initLocalStorageState({via})
    } else {
      initLocalStorageState({})
    }
    
    //localStorage.getItem()
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