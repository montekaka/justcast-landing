import React from "react";
import PlayerMeta from './PlayerMeta';
import MediaPlayer from './MediaPlayer'
import PlaylistModal from './PlaylistModal'

const PlayerContainer = () => {

  return (
    <div className="container-fluid">
      <PlaylistModal/>
      <PlayerMeta/>
      <MediaPlayer/>
    </div>     
  )
}

export default PlayerContainer;