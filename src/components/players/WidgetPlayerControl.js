import React from "react";
import moment from 'moment'
import { CustomInput, Form, FormGroup, Label, Progress } from 'reactstrap';
import WidgetPlayerPlayPauseButton from './WidgetPlayerPlayPauseButton'
import WidgetPlayerMenu from './WidgetPlayerMenu';
import VolumeBars from './VolumeBars'

// const menuItems = [
//   {key: 'subscribe', label: 'Subscribe'},
//   {key: 'share', label: 'share'},
//   {key: 'more_info', label: 'More info'}
// ]

const WidgetPlayerControl = ({
    date, name, playing, handlPlayPauseClick,
    progressBarIdName, playedSeconds, duration,
    handleSeekMouseDown, handleSeekMouseUp, handleSliderChange,
    section, handleSectionChange, menuItems, volume, increaseVolumeClicked,
    decreaseVolumeClicked, volumBinClicked
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
            <WidgetPlayerPlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick} loading={duration ? false : true}/>              
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
              <section className="extra-controls">
                <span className={`volume-control fe fe-volume-${volume > 0 ? "1" : "x"}`} onClick={decreaseVolumeClicked}/>
                <VolumeBars volume={volume} volumBinClicked={volumBinClicked}/>
                <span className="volume-control fe fe-volume-2" onClick={increaseVolumeClicked}/>
              </section>
            </div>
          </div>
        </section>
        <section className="menu">
          <WidgetPlayerMenu handleSectionChange={handleSectionChange} menuItems={menuItems}/>
        </section>    
      </>
    )
  } 
  return null;
}

export default WidgetPlayerControl