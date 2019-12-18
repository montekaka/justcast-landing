import React from "react";
import ReactPlayer from 'react-player'
import moment from 'moment'

var momentDurationFormatSetup = require("moment-duration-format");

const WidgetPlayer = ({minimize, audio_date, artwork, name, url, duration, playedSeconds, played, playing, handleDuration, handleProgress, handlPlayPauseClick, handleSliderChange, handleSeekMouseDown, handleSeekMouseUp, handlePlayerRef, handleMinimizePlayer}) => {
  return (
    <div className="widget-player-container dark-html-widget-player">
      <section className="widget-player-app">
        <div className="artwork">
          <img src="https://images.transistor.fm/file/transistor/images/show/15/medium_1521237846-artwork.jpg" />
        </div>
        <div className="main">
          <section className="podcast-name">
              This is a long string that is OK to truncate please and thank you
          </section>
          <section className="episode-name">
              This is a long string that is OK to truncate please and thank you
          </section>
          <section className="controls">
            <div className="play-button">
              Play / Pause
            </div>
            <div className="miscellaneous">
              <div className="player-progress-bar">
                <input type="range" className="input-progress"/>
                <progress max="100" value="80" />
              </div>          
              <div className="buttons">            
                <section className="time">
                  <span>04:12</span>
                  <span>|</span>
                  <span>10:22</span>              
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
          M
        </div>
      </section>
    </div>    
  )
}

export default WidgetPlayer;