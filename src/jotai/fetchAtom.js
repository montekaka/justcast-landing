import { atom } from "jotai";

export const podcastAtom = atom({
  name: "",
  id: "",
  artwork_url: "",  
  hide_widget_pub_date: false,
  current_episode_idx: 0,
  total_episodes: 0
  // loading: true,
});

// export const playingEpisodeAtom = atom({
//   id: "",
//   name: "",
//   audio_url: "",
//   duration: "",
//   durationSeconds: 0,
//   playingSeconds: 0,  
// })

export const episodesAtom = atom([]);

export const addPodcastAtom = atom(null, (_get, set, input) => {
  set(podcastAtom, () => {
    const {name, id, artwork_url_256, hide_widget_pub_date} = input
    return {name, id, artwork_url: artwork_url_256, hide_widget_pub_date};
  });
})

export const addEpisodesAtom = atom(null, (_get, set, input) => {
  set(episodesAtom, () => {
    const {items} = input
    return items;
  });
})

export const updatePlayingEpisodeAtom = atom(null, (_get, set, current_episode_idx) => {
  const state = _get(podcastAtom)
  set(podcastAtom, () => {
    return {...state, current_episode_idx};
  })
}) 

