import { useState, useEffect} from 'react';
import justcastApi from '../api/justcast'

const useAudiopostQuery = (showId, audiopostId) => {
  const [audiopost, setAudiopost] = useState({})

  useEffect(() => {    
    justcastApi.get((`/v1/shows/${showId}/audioposts/${audiopostId}`))
    .then((res) => {
      setAudiopost(res.data)
      // setShow(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [showId, audiopostId])

  return audiopost;
}

export default useAudiopostQuery;