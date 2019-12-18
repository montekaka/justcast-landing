import React from "react";
import moment from 'moment'
import { CustomInput, Form, FormGroup, Label, Progress } from 'reactstrap';

var momentDurationFormatSetup = require("moment-duration-format");

const FullPlayer = ({minimize, audio_date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, progressBarIdName}) => {
  const date = moment(audio_date).format('YYYY-MM-DD');

  return (
    <div className="widget-player-container dark-html-widget-player">
      <section className="widget-player-app">
        <div className="artwork">
          <img src={artwork ? artwork : "http://download.randgad.com/images/RandGadArt.jpg"} />
        </div>
        <div className="main">
          <section className="podcast-name">
              {date}
          </section>
          <section className="episode-name">
              {name}
          </section>
          <section className="controls">
            <div className="play-button">
              <PlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick} />              
            </div>
            <div className="miscellaneous">
              <div className="player-progress-bar">                
                <CustomInput
                  id={progressBarIdName} //"footer-player-progressbar"
                  className="input-progress" 
                  type="range" 
                  value={playedSeconds}
                  min={0}
                  max={duration}
                  step='any'
                  onMouseDown={handleSeekMouseDown}
                  onMouseUp={handleSeekMouseUp}
                  onChange={handleSliderChange}
                />
                <Progress max={duration} value={playedSeconds} />
              </div>          
              <div className="buttons">            
                <section className="time">
                  <span>{moment.duration(Math.floor(playedSeconds), "seconds").format()}</span>
                  <span>|</span>
                  <span>{moment.duration(Math.floor(duration), "seconds").format()}</span>              
                </section>
              </div>
            </div>            
          </section>
          <section className="menu">
            <nav>
              <a className="item">subscribe</a>
              <a className="item">SHARE</a>
              <a className="item">MORE INFO</a>
            </nav>
            <div className="power-by">
            </div>
          </section>
        </div>       
        <div className="minimize-button">
          <MinimizePlayerButton handleMinimizePlayer={handleMinimizePlayer}/>
        </div>
      </section>
    </div>    
  )
}
  
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

const MinimizePlayerButton = ({handleMinimizePlayer}) => {
  if(handleMinimizePlayer) {
    return (
      <div onClick={handleMinimizePlayer}>
        <svg className="bi bi-dash" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.5 10a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  }
  return null;
}

export default FullPlayer;