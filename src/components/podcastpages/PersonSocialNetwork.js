import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/img/icons/simple-icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/img/icons/simple-icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/simple-icons/twitter.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/img/icons/simple-icons/linkedin.svg'
import { ReactComponent as TiktokIcon } from '../../assets/img/icons/simple-icons/tiktok.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/img/icons/simple-icons/youtube.svg'
import { ReactComponent as PatreonIcon } from '../../assets/img/icons/social/patreon.svg'

const Logo = ({name, size, fill}) => {
  switch (name) {
    case "Facebook":        
      return <FacebookIcon fill={fill} width={size} height={size} />;
    case "Instagram":        
      return <InstagramIcon fill={fill} width={size} height={size} />;
    case "Twitter":        
      return <TwitterIcon fill={fill} width={size} height={size} />;
    case "LinkedIn":        
      return <LinkedInIcon fill={fill} width={size} height={size} />;
    case "Tiktok":        
      return <TiktokIcon fill={fill} width={size} height={size} />;
    case "Youtube":        
      return <YoutubeIcon fill={fill} width={size} height={size} />;
    case "Patreon":        
      return <PatreonIcon fill={fill} width={size} height={size} />;
    default:
      return null;
  }  
}

export default function PersonSocialNetwork(props) {
  const {name, href, size, fill} = props;
  
  if(href) {
    return (
      <a href={href} target="_blank">
        <Logo name={name} fill={fill} size={size}/>
      </a>
    )      
  }  

  return null;
}
