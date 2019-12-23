import React from "react";
import moment from 'moment'
import { CustomInput, Form, FormGroup, Label, Progress } from 'reactstrap';
import WidgetPlayerPlayPauseButton from './WidgetPlayerPlayPauseButton'
import WidgetPlayerMenu from './WidgetPlayerMenu';

const WidgetPlayerControl = ({
    date, name, playing, handlPlayPauseClick,
    progressBarIdName, playedSeconds, duration,
    handleSeekMouseDown, handleSeekMouseUp, handleSliderChange,
    section, handleSectionChange
  }) => {

  if(section === 'control') {
    return (
      <>
        <section className="podcast-name">
            {date}
        </section>
        <section className="episode-name">
            {name}
        </section>
        <section className="controls">
          <div className="play-button">
            <WidgetPlayerPlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick} />              
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
                <span>{playedSeconds > 1 ? moment.duration(Math.floor(playedSeconds), "seconds").format() : "0:00"}</span>
                <span>|</span>
                <span>{moment.duration(Math.floor(duration), "seconds").format()}</span>              
              </section>
            </div>
          </div>
        </section>
        <section className="menu">
          <WidgetPlayerMenu handleSectionChange={handleSectionChange}/>
        </section>    
      </>
    )
  } 
  return null;
}

export default WidgetPlayerControl