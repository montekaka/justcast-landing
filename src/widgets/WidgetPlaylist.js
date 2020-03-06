import React, {useEffect, useState} from "react";
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import WidgetPlaylistItem from './WidgetPlaylistItem'

const WidgetPlaylist = (props) => {
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [audioposts, setAudioposts] = useState([]);
  const [selectedAudiopost, setSelectedAudiopost] = useState({});

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const showdate = res.data;
      setShow(showdate);
      setAudioposts(showdate.audioposts);
      setSelectedAudiopost(showdate.audioposts[0]);
    })
    .catch((err) => {
      console.log('this is not available')
    })
  }, [id])

  const handleAudiopostClicked = (selectedId) => {
    const audiopost = audioposts.filter(audiopost => audiopost.id === selectedId);
    if(audiopost.length > 0) {
      setSelectedAudiopost(audiopost[0]);
    }
  }

  return (
    <div className="widget-playlist">
      {
        audioposts.map((audiopost) => 
          <WidgetPlaylistItem 
            key={audiopost.id.toString()} 
            name={audiopost.name} 
            id={audiopost.id} 
            audioDate={audiopost.audio_date}
            duration={audiopost.duration}
            selectedId={selectedAudiopost.id}
            handleClicked={handleAudiopostClicked}
            />            
        )
      }
    </div>
  )
}

export default WidgetPlaylist