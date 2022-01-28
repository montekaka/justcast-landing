import React, {useContext} from 'react';
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'

export default function HostCard(props) {
  const {img, href, group, role, name, description} = props;
  const { state } = useContext(PublicPodcastContext);
  const {cardBackgroundColor, textColor, buttonColor, buttonTextColor} = state;
// bg-gray-80
  return (
    <div className="host-card" style={{backgroundColor: cardBackgroundColor, color: textColor}}>
      {img ? <img className="avatar" src={img} alt={`${name} avatar`} /> : <div className="avatar avatar-flex" style={{backgroundColor: buttonColor}}>< div className="avatar-missing-img" style={{backgroundColor: cardBackgroundColor, color: textColor}}>{name.slice(0, 2)}</div></div>}
      
      {name}      
    </div>
  );
}