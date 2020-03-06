import React, {useEffect, useState} from "react";
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';
import WidgetPlaylistItem from './WidgetPlaylistItem'

const WidgetPlaylist = (props) => {
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [audioposts, setAudioposts] = useState([]);
  const [selectedAudiopost, setSelectedAudiopost] = useState({});

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const showdata = res.data;
      setShow(showdata.show);
      setAudioposts(showdata.audioposts);
      setSelectedAudiopost(showdata.audioposts[0]);
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

  if(show) {
    return (
      <>
        <WidgetPlayerControl
          id={selectedAudiopost.id}
          showId={id}
          show={show}
          audiopostData={selectedAudiopost}
        />    
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
      </>
    )
  }
  return null
}

export default WidgetPlaylist