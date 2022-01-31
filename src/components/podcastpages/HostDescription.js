import React from 'react';
import HostCardDescription from './HostCardDescription'

export default function HostDescription(props) {
  const {cardHeight, description} = props;

  if(cardHeight === "100%") {
    return (
      <div>
        <p>{description}</p>
      </div>
    )
  } else {
    return (
      <HostCardDescription text={description}>
        {description.length > 60 ? <button type="button" className='btn btn-link'>Show More</button> : null}        
      </HostCardDescription>
    )
  }
}
