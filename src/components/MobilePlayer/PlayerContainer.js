import React from "react";
import PlayerMeta from './PlayerMeta';
import MediaPlayer from './MediaPlayer'
import PlaylistModal from './PlaylistModal'

const PlayerContainer = () => {

  return (
    <div className="mobile-music-player">
      <PlaylistModal/>
      <PlayerMeta/>
      <MediaPlayer/>
    </div>     
  )
}

export default PlayerContainer;