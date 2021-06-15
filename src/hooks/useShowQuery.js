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
        
        const {show, audioposts, mailchimp_connection} = data;        
        if(show.recommend_audiopost_id) {
          const recommend_audiopost = audioposts.filter((a) => a.id === show.recommend_audiopost_id)
          if(recommend_audiopost && recommend_audiopost.length === 1) {
            const recommend_episode = recommend_audiopost[0];
            add({show, audioposts, recommend_episode, mailchimp_connection});
          } else {
            add({show, audioposts, mailchimp_connection});
          }
        } else {
          add({show, audioposts, mailchimp_connection});
        }
        
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