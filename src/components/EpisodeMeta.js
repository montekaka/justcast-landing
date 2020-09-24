import React from "react";
import {Link} from 'react-router-dom'
import moment from 'moment'

const EpisodeMeta = ({artwork, showName, audio_date, textColor}) => {
  const datetime = moment(audio_date).format('YYYY-MM-DD');
  const englishDateString = moment(audio_date).format('MMM DD, YYYY');

  return (
    <div className="row align-items-center py-5 border-top border-bottom">
      <div className="col-auto">
        <div className="avatar avatar-lg">
          <img src={artwork} alt="..." className="avatar-img rounded-circle"/>
        </div>
    
      </div>
      <div className="col ml-n5">
    
        <h6 className="text-uppercase mb-0" style={{color: textColor}}>
          {showName}
        </h6>
    
    
        <time className="font-size-sm" dateTime={datetime} style={{color: textColor}}>
          Published on {englishDateString}
        </time>
    
      </div>
    </div> 
  ) 
}

  export default EpisodeMeta;