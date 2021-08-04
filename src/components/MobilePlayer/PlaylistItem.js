import React from "react";
import moment from 'moment'
import { useAtom } from 'jotai';
import { playerAtom, changeEpisodeAtom, toggleModal, updatePlayingEpisodeAtom} from '../../jotai'

const PlaylistItem = (props) => {
  const {id, name, audio_date, artwork_url, audio_url, duration, hide_widget_pub_date, idx} = props;
  const date = moment(audio_date).format('YYYY-MM-DD');

  const [podcast] = useAtom(playerAtom);
  const [, changeEpisodeSet] = useAtom(changeEpisodeAtom);
  const [, toggleModalSet] = useAtom(toggleModal);
  const [, updatePlayingEpisode] = useAtom(updatePlayingEpisodeAtom)
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

      updatePlayingEpisode(idx);
    }    
  }

  return (
    <div className={`list-group-item ${activeClass}`} onClick={handleClick}>      
      <p className="small mb-0">
        <strong>{name}</strong>
      </p>
      {!hide_widget_pub_date ? <small>Publish date: {date}</small> : null}
      
    </div>
  )
}

export default PlaylistItem;