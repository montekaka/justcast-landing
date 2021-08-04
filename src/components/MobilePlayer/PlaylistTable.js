import React from "react";
import { useAtom } from 'jotai';
import { podcastAtom, playerAtom,  episodesAtom, toggleModal} from '../../jotai'
import PlaylistItem from './PlaylistItem';

const PlaylistTable = () => {

  const [podcast] = useAtom(podcastAtom);
  const [player] = useAtom(playerAtom);
  const [episodes] = useAtom(episodesAtom);
  const [, toggleModalSet] = useAtom(toggleModal);

  const {hide_widget_pub_date} = podcast;

  if(player && episodes) {
    const _episodes = episodes.slice(0, 1);

    return (
      <div className="playlist-table">
        <div className="d-flex align-items-center" onClick={toggleModalSet}>
          <div className="mr-auto">Most recent episode</div>
          <div className="ml-4">
            <div className="btn btn-sm btn-rounded-circle btn-primary-soft">
              <i className="fe fe-menu"/>
            </div>
          </div>
        </div>
        <hr/>
        <div>
          {
            _episodes.map((episode) => 
              <PlaylistItem 
                key={episode.id} 
                id={episode.id}
                name={episode.name} 
                audio_url={episode.audio_url}
                artwork_url={episode.artwork_url ? episode.artwork_url : podcast.artwork_url}
                audio_date={episode.audio_date}
                duration={episode.duration}
                hide_widget_pub_date={hide_widget_pub_date}
              />
            )
          }
        </div>
      </div>
    )
  }

  return null;
}

export default PlaylistTable;