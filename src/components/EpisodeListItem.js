import React from 'react';
import moment from 'moment'
import {
  Card, CardBody, Button
} from 'reactstrap';

const EpisodeListItem = ({name, description, audio_date, artwork_url}) => {
  const date = moment(audio_date).format('YYYY-MM-DD')

  return (
    <Card className="col-12 media-card-item">
      <CardBody>
        <div className="media">
          <img className="mr-3 media-artwork" src={artwork_url ? artwork_url : "http://download.randgad.com/images/RandGadArt.jpg"} alt="Generic placeholder image"/>
          <div className="media-body">
            <p>{date}</p>
            <h5 className="mt-0">{name}</h5>
            <div dangerouslySetInnerHTML={{__html: description}} />
          </div>
        </div>
      </CardBody>      
    </Card>
  )
}

export default EpisodeListItem;