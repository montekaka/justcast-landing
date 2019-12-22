import React from "react";
import moment from 'moment'

import MinimizePlayerButton from './MinimizePlayerButton'
import WidgetPlayerControl from './WidgetPlayerControl'

var momentDurationFormatSetup = require("moment-duration-format");

const FullPlayer = ({
  minimize, audio_date, 
  artwork, name, url, duration, 
  playedSeconds, played, playing, handleDuration, 
  handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, 
  handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer, progressBarIdName,
  section, handleSectionChange}) => {
  const date = moment(audio_date).format('YYYY-MM-DD');

  return (
    <div className="widget-player-container dark-html-widget-player">
      <section className="widget-player-app">
        <div className="artwork">
          <img src={artwork ? artwork : "http://download.randgad.com/images/RandGadArt.jpg"} />
        </div>
        <div className="main">
          <WidgetPlayerControl
            date={date} name={name} playing={playing} handlPlayPauseClick={handlPlayPauseClick}
            progressBarIdName={progressBarIdName} playedSeconds={playedSeconds} duration={duration}
            handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
            handleSliderChange={handleSliderChange} section={section}
            handleSectionChange={handleSectionChange}
          />
        </div>       
        <div className="minimize-button">
          <MinimizePlayerButton handleMinimizePlayer={handleMinimizePlayer}/>
        </div>
      </section>
    </div>    
  )
}

export default FullPlayer;