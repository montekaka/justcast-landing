import React from "react";
import { Row, Col} from 'reactstrap';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({items}) => {

  return (
    <Row>
      {
        items.map((item) => 
          <div className="col-xs-12 col-sm-6 col-xl-4 d-flex pb-1 mb-4">
            <EpisodeCard 
              key={item.id} 
              title={item.name}
              footer={item.audio_date}
              artworkUrl={item.artwork_url ? item.artwork_url : 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'}
              link={`/shows/${item.show_id}/audioposts/${item.id}`}
            />
          </div>
        )
      }
    </Row>
  )
}


export default EpisodeList;