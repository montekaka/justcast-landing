import React, {useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
import SimplePlayer from './players/SimplePlayer'

const FooterPlayer = () => {
  const {state} = useContext(PlayerContext);
  // const podcastContext = useContext(PodcastContext);
  const handleDuration = (duration) => {
    console.log(duration)
  }

  const handleProgress = (e) => {
    console.log(e)
  }


  if(!state.hide) {
    return (
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <div className="container text-white">
          <SimplePlayer 
            audio_date={state.audio_date}
            artwork={state.artwork}
            url={state.url} 
            name={state.name} 
            playing={state.playing} 
            handleDuration={handleDuration} 
            handleProgress={handleProgress}
          />
        </div>
      </footer>     
    )
  }
  return null;
}

export default FooterPlayer;