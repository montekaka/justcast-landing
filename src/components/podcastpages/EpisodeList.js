import React from "react";
import moment from 'moment'
import { Row } from 'reactstrap';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({slug, items}) => {
  if(items && items.length > 0) {
    return (
      <Row>
        {
          items.map((item) => 
            <div className="col-xs-12 col-sm-6 col-xl-4 d-flex pb-1 mb-4" key={item.id}>
              <EpisodeCard                  
                title={item.episode_title}                
                footer={moment(item.audio_date).format('YYYY-MM-DD')}
                artworkUrl={item.item_image ? item.item_image : 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'}
                link={`/shows/${slug}/audioposts/${item.id}`}
              />
            </div>
          )
        }
      </Row>
    )
  }
  return null
}


export default EpisodeList;