import React from 'react';
import { Row } from 'reactstrap';
import HostCard from './HostCard'

export default function MeetTheHosts(props) {
  const {title, items, textColor, cardBackgroundColor} = props;

  if(items && items.length > 0) {
    return (
      <div id="meet-the-hosts">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <h2 className="font-weight-bold" style={{color: textColor}}>{title ? title : "Meet the Hosts"}</h2>
          </div>          
        </div>
        <div className='host-list' style={{marginTop: "20px"}}>
          {
            items.map((item) => <HostCard 
              key={item.id}              
              name={item.name}
              img={item.img}
              href={item.href}
              email={item.email}
              description={item.description}
              group={item.group}
              role={item.role}
              roles={item.roles}
              facebook_url={item.facebook_url}
              twitter_url={item.twitter_url}
              linkedin_url={item.linkedin_url}
              tiktok_url={item.tiktok_url}
              instagram_url={item.instagram_url}
              youtube_url={item.youtube_url}
            />)
          }
        </div>      
      </div>
    )
  }
  
  return null;
}
