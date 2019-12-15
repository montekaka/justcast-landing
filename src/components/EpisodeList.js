import React from 'react';
import EpisodeListItem from './../components/EpisodeListItem'

const EpisodeList = ({items, artwork_url, handlePlay}) => {
  return (
    <section className="py-4 py-md-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h6 className="text-uppercase text-primary font-weight-bold">Latest episodes</h6>
          </div>
        </div>
        <div className="row">
          {    
            items.map((item) => 
              <EpisodeListItem 
                key={item.id.toString()}
                id={item.id}
                artwork_url={artwork_url}
                name={item.name} 
                description={item.description}
                audio_date={item.audio_date}
                artwork_url={item.artwork_url}
                handlePlay={handlePlay}
              />     
          )}
        </div>
      </div>
    </section>
  )
}

export default EpisodeList;