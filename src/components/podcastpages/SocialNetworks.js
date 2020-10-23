import React from "react";
import facebookImg from '../../assets/img/icons/social/facebook.svg'
import twitterImg from '../../assets/img/icons/social/twitter.svg'
import instagramImg from '../../assets/img/icons/social/instagram.svg'
import slackImg from '../../assets/img/icons/social/slack.svg'

const ListItem = ({url, iconImg, name}) => {
  if(url) {
    return (
      <li className="list-inline-item list-social-item mr-3">
        <a href={url} className="text-decoration-none">
          <img src={iconImg} className="list-social-icon" alt={name} />
        </a>
      </li>      
    )
  }

  return null;
}

const SocialNetworks = ({facebook_page, twitter_handle, instagram_profile, slack, textColor}) => {
  const twitterLink = twitter_handle ? twitter_handle.replace('@', 'https://www.twitter.com/') : null;
  // const themeContext = useContext(ThemeContext);
  // const {backgroundColorClass} = themeContext.state;
  
  return (
    <>      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">
            <div className="row align-items-center py-5 border-top border-bottom">
              <div className="col-auto"></div>
              <div className="col ml-n5">
                <h6 className="text-uppercase mb-0" style={{color: textColor}}>
                  You can find us on
                </h6>
              </div>
              <div className="col-auto">
                <ul className="d-inline list-unstyled list-inline list-social">
                  <ListItem url={facebook_page} iconImg={facebookImg} name="facebook"/>
                  <ListItem url={twitterLink} iconImg={twitterImg} name="twitter"/>
                  <ListItem url={instagram_profile} iconImg={instagramImg} name="instagram"/>
                  <ListItem url={slack} iconImg={slackImg} name="slack"/>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>                      
    </>    
  )
}

export default SocialNetworks;