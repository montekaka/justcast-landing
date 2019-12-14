import React from "react";
import ReactPlayer from 'react-player'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const SimplePlayer = ({audio_date, artwork, name, url, playing, handleDuration, handleProgress}) => {
  if(url) {
    return (    
      <>
        <div className="simple-player-container">
          <div className="simple-player-artwork">
            <img src={artwork ? artwork : "http://download.randgad.com/images/RandGadArt.jpg"} alt="Generic placeholder image"/>
          </div>          
          <div className="simple-player-body">
            <div className="main-content">
              <div className="row-one">
                <h3 className="name">{name}</h3>
                <span className="date-string">{audio_date}</span>
              </div>
              <div className="player-control">
                <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm">
                  <i className="fe fe-play"></i>
                </div>
              </div>
            </div>          
          </div>
        </div>  
        <ReactPlayer url={url} 
          width='0%'
          height='0%'
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          // onProgress={handleProgress}
          onDuration={handleDuration}
          onProgress={handleProgress}
          onSeek={e => console.log('onSeek', e)}
          playing={playing}
        />
      </>
    )
  }
  return null;
}

export default SimplePlayer;