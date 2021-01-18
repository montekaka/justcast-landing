import React from "react";
import moment from 'moment'
import { useAtom } from 'jotai';
import { playerAtom, changeEpisodeAtom, toggleModal } from '../../jotai'

const PlaylistItem = (props) => {
  const {id, name, audio_date, artwork_url, audio_url, duration} = props;
  const date = moment(audio_date).format('YYYY-MM-DD');

  const [podcast] = useAtom(playerAtom);
  const [, changeEpisodeSet] = useAtom(changeEpisodeAtom);
  const [, toggleModalSet] = useAtom(toggleModal);
  const activeClass = podcast.id === id ? 'active' : null;

  const handleClick = () => {
    if(podcast.id == id) {
      toggleModalSet()
    } else {
      changeEpisodeSet({
        id, 
        name, 
        audio_date, 
        artwork_url, 
        audio_url, 
        durationSeconds: 0,
        playedSeconds: 0,
        playing: true,
        openModal: false
      })
    }    
  }

  return (
    <div className={`list-group-item ${activeClass}`} onClick={handleClick}>
      <div className="row">
        <div className="col-auto">
          <div className="avatar avatar-sm">            
            <img src={artwork_url} alt={`${name} artwork`} className="avatar-img rounded-circle"/>            
          </div>
        </div>
        <div className="col ml-n2">
          <p className="small mb-0">
            <strong>{name}</strong>
          </p>
          <small>
            Publish date: {date}
          </small>     
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem;