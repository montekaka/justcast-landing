import React from "react";
import ReactPlayer from 'react-player'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const PlayPauseButton = ({playing, handlPlayPauseClick}) => {
  if(playing === true) {
    return (
      <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm"
        onClick={handlPlayPauseClick}
      >
        <i className="fe fe-pause"></i>
      </div> 
    )
  }

  return (
    <div className="play-control-button btn btn-primary btn-rounded-circle btn-sm" 
      onClick={handlPlayPauseClick}
    >
      <i className="fe fe-play"></i>
    </div>
  )
}

const SimplePlayer = ({audio_date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef}) => {
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
            </div>
            <div className="player-control">
              <PlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick}/>
              <div className="play-time">
                <div>{playedSeconds}</div><div>/</div><div>{duration}</div>
              </div>
            </div>
            <CustomInput 
              className="slider" 
              type="range" 
              id="footer-player-slider-bar"
              value={playedSeconds}
              min={0}
              max={duration}
              step='any'
              onMouseDown={handleSeekMouseDown}
              onMouseUp={handleSeekMouseUp}
              onChange={handleSliderChange}
              />
          </div>
        </div>  
        <ReactPlayer url={url}
          className='react-player'
          width='0%'
          height='0%'
          ref={handlePlayerRef}
          // onReady={() => console.log('onReady')}
          // onStart={() => console.log('onStart')}
          // onSeek={e => console.log('onSeek', e)}
          onDuration={handleDuration}
          onProgress={handleProgress}
          volume={0.02}
          playing={playing}
        />
      </>
    )
  }
  return null;
}

export default SimplePlayer;