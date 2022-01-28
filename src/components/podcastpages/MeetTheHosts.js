import React from 'react';
import { Row } from 'reactstrap';
import HostCard from './HostCard'

export default function MeetTheHosts(props) {
  const {items, textColor, cardBackgroundColor} = props;

  if(items && items.length > 0) {
    return (
      <div id="meet-the-hosts">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <h2 className="font-weight-bold" style={{color: textColor}}>Meet the Hosts</h2>            
          </div>          
        </div>
        <div className='host-list' style={{marginTop: "20px"}}>
          {
            items.map((item) => <HostCard 
              key={item.id}              
              name={item.name}
              img={item.img}
              cardBackgroundColor={cardBackgroundColor}
            />)
          }
        </div>      
      </div>
    )
  }
  
  return null;
}
