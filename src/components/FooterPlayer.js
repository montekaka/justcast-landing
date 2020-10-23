import React, {useContext, useEffect} from "react";
import {Context as PlayerContext} from '../context/PlayerContext'
import SimplePlayer from './players/SimplePlayer'

const FooterPlayer = () => {
  const {state, playPause, updateDuration, updateProgress, updateSection,
    toggleSeeking, handleSeekChange, toggleMinimizePlayer, updatePlayerRef} = useContext(PlayerContext);
  // let reactPlayer = null;

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
    state.reactPlayer.seekTo(state.playedSeconds);
  }

  const handleSeekMouseDown = (event) => {    
    toggleSeeking()
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
          embedUrl={state.embedUrl}
          shareUrl={state.shareUrl}
          name={state.name} 
          description={state.description}          
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
          handleMinimizePlayer={handleMinimizePlayer}
          minimize={state.minimize}
          section={state.section}
          updateSection={updateSection}
          menuItems={[{key: 'subscribe', label: 'Subscribe'}, {key: 'share', label: 'share'}, {key: 'more_info', label: 'More info'}]}
        />
      </div>
    )
  }
  return null;
}

export default FooterPlayer;