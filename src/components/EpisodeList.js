import React from 'react';
import EpisodeListItem from './../components/EpisodeListItem'

const EpisodeList = ({items, artwork_url}) => {
  return (
    <div className="row">
      {    
      items.map((item) => 
        <EpisodeListItem 
          key={item.id.toString()} 
          artwork_url={artwork_url}
          name={item.name} 
          description={item.description}
          audio_date={item.audio_date}
          artwork_url={item.artwork_url}
        />     
      )}
    </div>
  )
}

export default EpisodeList;