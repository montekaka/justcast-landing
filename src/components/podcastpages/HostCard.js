import React, {useContext, useState} from 'react';
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import { Badge, Button } from 'reactstrap';
import PersonSocialNetwork from './PersonSocialNetwork'
import HostDescription from './HostDescription'

export default function HostCard(props) {
  const {img, href, email, name, description, roles, facebook_url, twitter_url, linkedin_url, tiktok_url, instagram_url, youtube_url} = props;
  const { state } = useContext(PublicPodcastContext);
  const {cardBackgroundColor, textColor, buttonColor, buttonTextColor} = state;  
  const [cardHeight, setCardHeight] = useState("500px");
  
  const toggle = () => {
    if(cardHeight === "500px") {
      setCardHeight("100%")
    } else {
      setCardHeight("500px")
    }
  }


// bg-gray-80
  return (
    <div className="host-card" style={{height: cardHeight, backgroundColor: cardBackgroundColor, color: textColor}}>
      {img ? <img className="avatar" src={img} alt={`${name} avatar`} /> : <div className="avatar avatar-flex" style={{backgroundColor: `${buttonColor}90`}}>< div className="avatar-missing-img" style={{backgroundColor: cardBackgroundColor, color: textColor}}>{name.slice(0, 2)}</div></div>}
      <div className='host-card-body'>
        <h3>{name}</h3>
        <div className='host-card-roles'>
          {
            roles.map((role) => <Badge key={role.code}>{role.role_title}</Badge>)
          }
        </div>
        <div className='host-card-roles'>
          {href ? <a className='badge badge-secondary' href={href} target="_blank"><i className='fe fe-home'/>Home page</a> : null}
          {email ? <a className='badge badge-secondary' href={`mailto:${email}`} target="_blank"><i className='fe fe-home'/>Email Us</a> : null}
        </div>        
        <div className='host-card-roles'>
          {
            [{href: facebook_url, name: "Facebook"}, {href: twitter_url, name: "Twitter"}, {href: linkedin_url, name: "LinkedIn"}, {href: tiktok_url, name: "Tiktok"}, {href: instagram_url, name: "Instagram"}, {href: youtube_url, name: "Youtube"}].map((item) => <PersonSocialNetwork key={item.name} href={item.href} name={item.name} size="24" fill={textColor} />)
          }
        </div>        
        {description ? <div className='host-description' onClick={toggle}>
          <HostDescription cardHeight={cardHeight} description={description}/>
        </div> : null}        
      </div>      
    </div>
  );
}