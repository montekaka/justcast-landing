import React, {useContext} from "react";
import {Context as PodcastContext} from '../context/PodcastContext'
import {Context as PlayerContext} from '../context/PlayerContext'

const FooterPlayer = () => {
  const playerContext = useContext(PlayerContext);
  const podcastContext = useContext(PodcastContext);

  if(playerContext.state.id) {
    return (
      <footer className="footer mt-auto py-3 fixed-bottom bg-dark">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>     
    )
  }
  return null;
}

export default FooterPlayer;