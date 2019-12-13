import React from 'react';
import EpisodeListItem from './../components/EpisodeListItem'

const EpisodeList = ({items}) => {
  return (
    <div className="row">
      {    
      items.map((item) => 
        <EpisodeListItem key={item.id.toString()} name={item.name}/>     
      )}
    </div>
  )
}

export default EpisodeList;