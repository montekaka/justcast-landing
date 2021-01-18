import { atom } from "jotai";

export const podcastAtom = atom({
  name: "",
  id: "",
  artwork_url: "",  
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
    const {name, id, artwork_url_256} = input
    return {name, id, artwork_url: artwork_url_256};
  });
})

export const addEpisodesAtom = atom(null, (_get, set, input) => {
  set(episodesAtom, () => {
    const {items} = input
    return items;
  });
})


