import { useState, useEffect, useContext} from 'react';
import justcastApi from '../api/justcast'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'

const useShowQuery = (showId) => {
  // const [show, setShow] = useState({})
  const [privateShow, setPrivateShow] = useState(false);
  const { state, add } = useContext(PublicPodcastContext);

  useEffect(() => {
    if(!state.name) {
      justcastApi.get((`/v1/shows/${showId}/audioposts`))
      .then((res) => {
        const data = res.data;
        const {show, audioposts} = data;
        add({show, audioposts});
        // setShow(res.data);
      })
      .catch((err) => {
        
        console.log(err);
      })
    }

  }, [showId])

  return privateShow;
}

export default useShowQuery;