import React, {useEffect} from "react";
import { Route, Link} from 'react-router-dom'
import { Alert } from 'reactstrap';
import LandingPageNavbars from './LandingPageNavbars'
import LandingPageFooter from './LandingPageFooter'

const navItems = [
  {label:'Pricing', url: "/features-pricing"},
  {label:'How JustCast works', url: "/how-justcast-works"},
  {label:'Examples', url: "/examples"}
]

const CovidAlert = ({rest}) => {
  if(rest.path === '/') {
    return (
      <Alert color="secondary">
        COVID-19: Resources to help your church manage through uncertainty.  <Link to="/blogs/resources-for-church-impacted-by-coronavirus" className="alert-link">Learn more</Link>
      </Alert>    
    )
  }
  return null;
}

const LandingPageRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    
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
        <CovidAlert rest={rest}/>
        <LandingPageNavbars navItems={navItems}/>
        <Component {...props} />
        <LandingPageFooter/>
      </>
    )} />
  )
}

export default LandingPageRoute