import React, {useEffect, useState} from "react";
import justcastApi from '../api/justcast'
import data from './../dumps/result.json'
import WidgetPlayer from './../components/players/WidgetPlayer'

const getAudiopostById = (audioposts, id) => {
  const _ = audioposts.filter(audiopost => audiopost.id.toString() === id.toString());
  if(_.length > 0) {
    return _[0];
  }
  return null;
}

const initState = {
  id: "",
  name: "",
  audio_date: "",
  url: "",
  description: "",
  artwork: "",
  hide: true,
  playing: false,
  duration: 0,
  loaded: 0, // in percentage
  loadedSeconds: 0,
  played: 0, // in percentage
  playedSeconds: 0,
  seeking: false,
  minimize: false,  
}

const SingleWidgetPlayer = (props) => {
  let reactPlayer = null;
  const id = props.match.params.id;
  const showId = props.match.params.show_id;  
  const [audiopost, setAudiopost] = useState(initState);
  const [section, setSection] = useState('control') //[control, subscribe, share, more_info]


  const toggleSeeking = () => {
    setAudiopost({...audiopost, seeking: !audiopost.seeking});
  }

  const playPause = () => {
    setAudiopost({...audiopost, playing: !audiopost.playing})
  }

  const handleDuration = (duration) => {
    setAudiopost({...audiopost, duration: duration})
  }

  const handleProgress = (progress) => {  
    if(audiopost.duration) {
      setAudiopost({...audiopost, ...progress})
    }    
  }

  const handleSliderChange = (event) => {
    setAudiopost({...audiopost, playedSeconds: parseFloat(event.target.value)});
  }

  const handleSeekMouseUp = (e) => {
    toggleSeeking()
    reactPlayer.seekTo(audiopost.playedSeconds);
  }

  const handleSeekMouseDown = (event) => {    
    toggleSeeking()
  }  

  const handlePlayerRef = (player) => {
    if(reactPlayer === null) {
      reactPlayer = player;
    }
  }

  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}/audioposts/${id}`)
    .then((res) => {
      const data = res.data;
      
      setAudiopost({
        ...audiopost, 
        id: data.id,
        name: data.name,
        audio_date: data.audio_date,
        url: data.audio_url,
        artwork: data.show.artwork_url_256
      })
    })
    .catch((err) => {
      // development only
      if(getAudiopostById(data.audioposts, id)) {
        const audio = getAudiopostById(data.audioposts, id)
        setAudiopost({
          ...audiopost,
          id: audio.id,
          name: audio.name,
          audio_date: audio.audio_date,
          url: audio.audio_url
        })
      }
      //TODO - handle error
      console.log(err);
    })
  }, [showId, id])  

  if(audiopost.id) {
    return (
      <>
        <WidgetPlayer
          progressBarIdName={id}
          audio_date={audiopost.audio_date}
          artwork={audiopost.artwork}
          url={audiopost.url}
          name={audiopost.name}
          playing={audiopost.playing}
          played={audiopost.played}
          playedSeconds={audiopost.playedSeconds}
          duration={audiopost.duration}
          handleDuration={handleDuration} 
          handleProgress={handleProgress}
          handlPlayPauseClick={playPause}
          handleSeekMouseUp={handleSeekMouseUp}
          handleSeekMouseDown={handleSeekMouseDown}
          handleSliderChange={handleSliderChange}
          handlePlayerRef={handlePlayerRef}
          minimize={audiopost.minimize}
          section={section}
          handleSectionChange={setSection}
        />
      </>
    )
  }
  return null;
}

export default SingleWidgetPlayer