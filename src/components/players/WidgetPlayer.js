import React from "react";
import ReactPlayer from 'react-player'
import FullPlayer from './FullPlayer'

const WidgetPlayer = ({
  progressBarIdName,
  minimize, 
  audio_date, 
  artwork, 
  name, 
  url, 
  duration, 
  playedSeconds, 
  played, 
  playing, 
  handleDuration, 
  handleProgress, 
  handlPlayPauseClick, 
  handleSliderChange, 
  handleSeekMouseDown, 
  handleSeekMouseUp, 
  handlePlayerRef, 
  handleMinimizePlayer
}) => {
  return (
    <>
      <FullPlayer 
      widgetPlayer={true}
      progressBarIdName={progressBarIdName} 
      minimize={minimize} 
      audio_date={audio_date} 
      artwork={artwork} name={name} url={url} duration={duration} 
      playedSeconds={playedSeconds} played={played} playing={playing} 
      handleDuration={handleDuration} handleProgress={handleProgress} 
      handlPlayPauseClick={handlPlayPauseClick} handleSliderChange={handleSliderChange} 
      handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
      handlePlayerRef={handlePlayerRef}/>
      <ReactPlayer url={url}
          className='react-player'
          width='0%'
          height='0%'
          ref={handlePlayerRef}
          onDuration={handleDuration}
          onProgress={handleProgress}
          playing={playing}
        />      
    </>
  )
}

export default WidgetPlayer;