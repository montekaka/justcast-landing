import React, {useContext, useState} from 'react';
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import { Badge, Button } from 'reactstrap';
import HostCardDescription from './HostCardDescription'

export default function HostCard(props) {
  const {img, href, group, role, name, description} = props;
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
        <div style={{fontSize: "14px", marginBottom: "20px", marginBottom: "10px"}}>
          <Badge>{group}</Badge> {' '}
          <Badge>{role}</Badge>
        </div>
        {href ? <a className='badge badge-secondary' href={href} target="_blank"><i className='fe fe-home'/> Home page</a> : null}
        {description ? <div className='host-description' onClick={toggle}>
          {cardHeight === "100%" ? <div>{description}</div> : <HostCardDescription text={description}/>} 
        </div> : null}
        
      </div>      
    </div>
  );
}