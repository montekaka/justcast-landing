import React, {useContext, useEffect} from "react";
import {Context as PlayerContext} from '../context/PlayerContext'
import SimplePlayer from './players/SimplePlayer'

const FooterPlayer = () => {
  const {state, playPause, updateDuration, updateProgress, updateSection,
    toggleSeeking, handleSeekChange, toggleMinimizePlayer} = useContext(PlayerContext);
  let reactPlayer = null;

  const handleDuration = (duration) => {
    updateDuration(duration)
  }

  const handleProgress = (progress) => {
    updateProgress(progress)
  }

  const handleSliderChange = (event) => {
    handleSeekChange(parseFloat(event.target.value)); 
  }

  const handleSeekMouseUp = (e) => {
    toggleSeeking()    
    reactPlayer.seekTo(state.playedSeconds);
  }

  const handleSeekMouseDown = (event) => {    
    toggleSeeking()
  }  

  const handlePlayerRef = (player) => {
    if(reactPlayer === null) {
      reactPlayer = player;
    }
  }

  const handleMinimizePlayer = () => {
    toggleMinimizePlayer();
  }

  // useEffect(() => {
  //   console.log(reactPlayer)
  // }, [reactPlayer])

  if(state.hide === false) {
    return (     
        <div className="fixed-bottom">
          <SimplePlayer 
            audio_date={state.audio_date}
            artwork={state.artwork}
            url={state.url} 
            name={state.name} 
            playing={state.playing}
            played={state.played}
            playedSeconds={state.playedSeconds}
            duration={state.duration}
            handleDuration={handleDuration} 
            handleProgress={handleProgress}
            handlPlayPauseClick={playPause}
            handleSeekMouseUp={handleSeekMouseUp}
            handleSeekMouseDown={handleSeekMouseDown}
            handleSliderChange={handleSliderChange}
            handlePlayerRef={handlePlayerRef}
            handleMinimizePlayer={handleMinimizePlayer}
            minimize={state.minimize}
            section={state.section}
            updateSection={updateSection}
          />
        </div>
    )
  }
  return null;
}

export default FooterPlayer;