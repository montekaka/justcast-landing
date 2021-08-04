import React from "react";
import { useAtom } from 'jotai';
import { podcastAtom, playerAtom,  episodesAtom} from '../../jotai'
import PlaylistItem from './PlaylistItem';

const Playlist = () => {
  const [podcast] = useAtom(podcastAtom);
  const [player] = useAtom(playerAtom);
  const [episodes] = useAtom(episodesAtom);

  if(player && episodes) {
    return (
      <div className="list-group list-group-focus">
        {
          episodes.map((episode, idx) => 
            <PlaylistItem 
              key={episode.id} 
              id={episode.id}
              name={episode.name} 
              audio_url={episode.audio_url}
              artwork_url={episode.artwork_url ? episode.artwork_url : podcast.artwork_url}
              audio_date={episode.audio_date}
              duration={episode.duration}
              hide_widget_pub_date={podcast.hide_widget_pub_date}
              idx={idx}
            />
          )
        }
      </div>
    )
  }

  return null;
}

export default Playlist;