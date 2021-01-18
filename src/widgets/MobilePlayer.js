import React, {useEffect} from "react";
import { useAtom } from 'jotai';
import justcastApi from '../api/justcast'
import { addPodcastAtom, addEpisodesAtom, addPlayerAtom } from './../jotai'
import { PlayerContainer} from './../components/MobilePlayer'

const MobilePlayer = (props)  => {
  const id = props.match.params.id;
  const referer_url = document.referrer;

  const [, podcastSet] = useAtom(addPodcastAtom);
  const [, episodesSet] = useAtom(addEpisodesAtom);
  const [, playerSet] = useAtom(addPlayerAtom);  

  useEffect(() => {
    justcastApi.get(`/v1/shows/${id}/audioposts?referer_url=${referer_url}`)
    .then((res) => {
      const data = res.data;
      const show = data.show;
      const audioposts = data.audioposts;
      episodesSet({items: audioposts})
      podcastSet(show);
      playerSet({item: audioposts[0]});      
    })
    .catch((err) => {
      console.log('gg');
    })

  }, [id])

  return (
    <div style={{height: "100vh", width: "100%", background: "#d0dee9", margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <PlayerContainer/> 
    </div>
  );
}

export default MobilePlayer;