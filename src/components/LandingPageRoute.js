import React, {useEffect} from "react";
import { Route } from 'react-router-dom'
import LandingPageNavbars from './LandingPageNavbars'
import LandingPageFooter from './LandingPageFooter'

const navItems = [
  {label:'Home', url: "/"},
  {label:'About us', url: "/about_us"}
]
const LandingPageRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    console.log('hi')
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.REACT_APP_CRISP_CHAT_WEBSITE_ID;

    (function() {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

  }, [])

  return (
    <Route {...rest} render={(props) => (
      <>
        <LandingPageNavbars navItems={navItems}/>
        <Component {...props} />
        <LandingPageFooter/>
      </>
    )} />
  )
}

export default LandingPageRoute