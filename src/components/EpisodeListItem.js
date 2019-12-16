import React from 'react';
import {Link} from 'react-router-dom'
import parse from 'html-react-parser';
import moment from 'moment'
import {
  Card, CardBody, Button
} from 'reactstrap';
import PlayPauseButton from './PlayPauseButton';


const RenderHTML = ({description}) => {
  if(description) {
    return parse(description);
  }
  return null;
}

const EpisodeListItem = ({showId, id, name, description, audio_date, url, artwork_url}) => {
  const date = moment(audio_date).format('YYYY-MM-DD');
  const html = description ? parse(description) : null;
  const pageUrl = `/shows/${showId}/audioposts/${id}`

  return (
    <Card className="col-12 card-border border-primary shadow-light-lg media-card-item" data-aos="fade-up">
      <CardBody>
        <div className="simple-player-container">
          <div className="simple-player-artwork">
            <Link to={pageUrl}>
              <img src={artwork_url ? artwork_url : "http://download.randgad.com/images/RandGadArt.jpg"} alt="Generic placeholder image"/>
            </Link>            
          </div>          
          <div className="simple-player-body">
            <div className="main-content">
              <div className="row-one">
                <Link to={pageUrl} className="name-black" ><h3 >{name}</h3></Link>
                <span className="date-string">{date}</span>
              </div>
              <div className="player-control">
                <PlayPauseButton className="play-control-button" audio_date={audio_date} id={id} url={url} name={name} artwork={artwork_url} description={description}/>                
              </div>              
              <div className="row-two">
                <RenderHTML description={description}/>
                {/* <div dangerouslySetInnerHTML={{__html: description}} /> */}
              </div>
            </div>          
          </div>
        </div>
      </CardBody>      
    </Card>
  )
}

export default EpisodeListItem;