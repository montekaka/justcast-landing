import React from "react";
import ReactPlayer from 'react-player'
import moment from 'moment'
import { CustomInput, Form, FormGroup, Label, Progress } from 'reactstrap';

var momentDurationFormatSetup = require("moment-duration-format");

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

const MinimizePlayer = ({valuenow, maxvalue, handleMinimizePlayer}) => {
  return (
    <Progress value={valuenow} max={maxvalue} onClick={handleMinimizePlayer}/>
  )
}


const SimplePlayer = ({minimize, audio_date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer}) => {
  if(url) {
    const date = moment(audio_date).format('YYYY-MM-DD');
    return (    
      <>
        {
          minimize ? <MinimizePlayer  
            handleMinimizePlayer ={handleMinimizePlayer}
            valuenow={playedSeconds} 
            maxvalue={duration}/> : 
          <div className="simple-player-container">
            <div className="simple-player-artwork">
              <img src={artwork ? artwork : "http://download.randgad.com/images/RandGadArt.jpg"} alt="Generic placeholder image"/>
            </div>
            <div className="simple-player-body">
              <div className="main-content">
                <div className="row-one">
                  <h3 className="name">{name}</h3>
                  <span className="date-string">{date}</span>
                </div>              
              </div>
              <div className="player-control">
                <PlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick}/>
                <div className="play-time">
                  <div>{moment.duration(Math.floor(playedSeconds), "seconds").format()}</div><div>/</div><div>{moment.duration(Math.floor(duration), "seconds").format()}</div>
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
            <div className="simple-player-min-handler" onClick={handleMinimizePlayer}>
              min
            </div>
          </div>  
        }
      
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
          // volume={0.02}
          playing={playing}
        />
      </>
    )
  }
  return null;
}

export default SimplePlayer;