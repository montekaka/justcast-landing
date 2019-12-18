import React from "react";
import ReactPlayer from 'react-player'
import moment from 'moment'
import { CustomInput, Form, FormGroup, Label, Progress } from 'reactstrap';

var momentDurationFormatSetup = require("moment-duration-format");

const MinimizePlayer = ({valuenow, maxvalue, handleMinimizePlayer}) => {
  return (
    <Progress value={valuenow} max={maxvalue} onClick={handleMinimizePlayer}/>
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

const MinimizePlayerButton = () => {
  return (
    <></
  )
}

const FullPlayer = ({minimize, date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer}) => {
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
        {
          
        }
        <div className="minimize-button">
          M
        </div>
      </section>
    </div>    
  )
}


const SimplePlayer = ({minimize, audio_date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer}) => {
  if(url) {
    const date = moment(audio_date).format('YYYY-MM-DD');
    return (    
      <>
        {
          minimize ? <MinimizePlayer  handleMinimizePlayer ={handleMinimizePlayer} valuenow={playedSeconds} maxvalue={duration}/> : 
          <FullPlayer minimize={minimize} date={date} artwork={artwork} name={name} url={url} duration={duration} playedSeconds={playedSeconds} played={played} playing={playing} handleDuration={handleDuration} handleProgress={handleProgress} handlPlayPauseClick={handlPlayPauseClick} handleSliderChange={handleSliderChange} handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} handlePlayerRef={handlePlayerRef} handleMinimizePlayer={handleMinimizePlayer} />
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