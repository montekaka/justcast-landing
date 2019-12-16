import React, {useContext} from "react";
import {Context as PlayerContext} from '../context/PlayerContext'

const ButtonIcon = ({playing, playingId, id}) => {
  if(playing && playingId === id) {
    return <i className="fe fe-pause"></i>
  }
  return <i className="fe fe-play"></i>
}

const PlayPauseButton = ({
  audio_date,
  id,
  url,
  name,
  description,
  artwork
}) => {
  const {state, add, playPause} = useContext(PlayerContext);

  const handlePlayClick = () => {
    if(!state.id) {
      // new
      add({audio_date,id,url,name,description,artwork})
    } else {
      if(state.id !== id) {
        add({audio_date,id,url,name,description,artwork});
      } else {
        playPause();
      }
    }
  }

  return (
    <div className="text-center text-md-left">
      <div className="btn btn-primary btn-rounded-circle btn" onClick={handlePlayClick}>
        <ButtonIcon playing={state.playing} playingId={state.id} id={id}/>
      </div>  
    </div>  
  )

}

export default PlayPauseButton;