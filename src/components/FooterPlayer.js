import React, {useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
import SimplePlayer from './players/SimplePlayer'

const FooterPlayer = () => {
  const {state, playPause, updateDuration, updateProgress, toggleSeeking, handleSeekChange} = useContext(PlayerContext);
  let reactPlayer = {};

  // const podcastContext = useContext(PodcastContext);
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
    reactPlayer = player;
  }

  if(state.hide === false) {
    return (
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <div className="container text-white">
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
          />
        </div>
      </footer>     
    )
  }
  return null;
}

export default FooterPlayer;