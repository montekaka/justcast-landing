import React, {useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'
import SimplePlayer from './players/SimplePlayer'

const FooterPlayer = () => {
  const {state} = useContext(PlayerContext);
  // const podcastContext = useContext(PodcastContext);

  if(state.id) {
    return (
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <div className="container">
          <SimplePlayer url={state.url} name={state.name}/>
        </div>
      </footer>     
    )
  }
  return null;
}

export default FooterPlayer;