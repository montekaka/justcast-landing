import React, {useEffect, useState} from "react";
import { Spinner } from 'reactstrap';
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';
import WidgetPlaylistItem from './WidgetPlaylistItem'

const WidgetPlaylist = (props) => {
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [audioposts, setAudioposts] = useState([]);
  const [selectedAudiopost, setSelectedAudiopost] = useState({});
  const [autoplay, setAutoplay] = useState(false);
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts`)
    .then((res) => {
      const showdata = res.data;
      setShow(showdata.show);
      setAudioposts(showdata.audioposts);
      setSelectedAudiopost(showdata.audioposts[0]);
      setMenuItems([{key: 'subscribe', label: 'Subscribe'}, {key: 'share', label: 'share'}, {key: 'more_info', label: 'more info'}])
    })
    .catch((err) => {
      console.log('this is not available')
    })
  }, [id])

  const handleAudiopostClicked = (selectedId) => {
    const audiopost = audioposts.filter(audiopost => audiopost.id === selectedId);
    if(audiopost.length > 0) {
      setSelectedAudiopost(audiopost[0]);
      setAutoplay(true);
    }
  }

  if(show) {
    return (
      <>
        <WidgetPlayerControl
          playerControlSquare={true}
          id={selectedAudiopost.id}
          showId={id}
          show={show}
          audiopostData={selectedAudiopost}
          autoplay={autoplay}
          menuItems={menuItems}
        />    
        <div className="widget-playlist">
          <div className="playlist-header">
            <div>{audioposts.length} LATEST EPISODES</div>
          </div>
          <div className="playlist-items">
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
        </div>
      </>
    )
  }
  return <Spinner color="primary" />
}

export default WidgetPlaylist