import React from 'react';
import moment from 'moment'
import {
  Card, CardBody, Button
} from 'reactstrap';

const EpisodeListItem = ({name, description, audio_date, artwork_url}) => {
  const date = moment(audio_date).format('YYYY-MM-DD')

  return (
    <Card className="col-12 card-border border-primary shadow-light-lg media-card-item" data-aos="fade-up">
      <CardBody>
        <div className="simple-player-container">
          <div className="simple-player-artwork">
            <img src={artwork_url ? artwork_url : "http://download.randgad.com/images/RandGadArt.jpg"} alt="Generic placeholder image"/>
          </div>          
          <div className="simple-player-body">
            <div className="main-content">
              <div className="row-one">
                <h3 className="name">{name}</h3>
                <span className="date-string">{date}</span>
              </div>
              <div className="player-control">
                <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm">
                  <i className="fe fe-play"></i>
                </div>
              </div>              
              <div className="row-two">
                <div dangerouslySetInnerHTML={{__html: description}} />
              </div>
            </div>          
          </div>
        </div>
      </CardBody>      
    </Card>
  )
}

export default EpisodeListItem;