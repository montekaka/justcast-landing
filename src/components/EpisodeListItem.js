import React, {useContext} from 'react';
import {Context as ThemeContext} from '../context/ThemeContext'
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

const RenderImg = ({artwork, name}) => {
  if(artwork) {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <img className="figure-img img-fluid rounded lift lift-lg" src={artwork} alt={`${name} artwork`}/>
        </div>
      </div>      
    )     
  }
  return null
}

const EpisodeListItem = ({
  showId, 
  id, 
  name, 
  description, 
  audio_date, 
  url, 
  artwork_url,
  episode_artwork_url,
  share_on_facebook,
  share_on_twitter
  }) => {

  const {state} = useContext(ThemeContext)
  const { buttonColor, cardBackgroundColor, textColor } = state;

  const date = moment(audio_date).format('YYYY-MM-DD');
  const html = description ? parse(description) : null;
  const pageUrl = `/shows/${showId}/audioposts/${id}`
  const embedUrl = `${process.env.REACT_APP_BASE_PATH}/widget/${showId}/audioposts/${id}`
  const shareUrl = `${process.env.REACT_APP_BASE_PATH}/shows/${showId}/audioposts/${id}`
  
  return (
    <Card className="col-12 card-border shadow-light-lg media-card-item" data-aos="fade-up" style={{borderTopColor: buttonColor, backgroundColor: cardBackgroundColor, color: textColor}}>
      <CardBody>
        <div className="simple-player-container">
          <div className="simple-player-artwork">
            <Link to={pageUrl}>
              <img src={artwork_url ? artwork_url : "https://justcast.herokuapp.com/images/default_thumb_show_image.png"} alt="podcast artwork"/>
            </Link>            
          </div>          
          <div className="simple-player-body">
            <div className="main-content">
              <div className="row-one">
                <Link to={pageUrl} className="name-black" style={{color: textColor}}><h3 >{name}</h3></Link>
                <span className="date-string">{date}</span>
              </div>
              <div className="player-control">
                <PlayPauseButton className="play-control-button" 
                  audio_date={audio_date} 
                  id={id} 
                  url={url} 
                  name={name} 
                  artwork={artwork_url} 
                  description={description} 
                  embedUrl={embedUrl} 
                  shareUrl={shareUrl}
                  shareOnFacebook={share_on_facebook}
                  shareOnTwitter={share_on_twitter}
                />
              </div>              
              <div className="row-two">
                <RenderImg artwork={episode_artwork_url} name={name}/>
                <RenderHTML description={description}/>                
              </div>
            </div>          
          </div>
        </div>
      </CardBody>      
    </Card>
  )
}

export default EpisodeListItem;