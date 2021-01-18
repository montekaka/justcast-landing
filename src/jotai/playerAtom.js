import { atom } from "jotai";

export const playerAtom = atom({
  id: "",
  name: "Loading....",
  audio_url: "",
  duration: "",
  artwork_url: "",
  durationSeconds: 0,
  playedSeconds: 0,
  message: "loading...",
  onReady: false,
  playerRef: null,
  playing: false,
  seeking: false,
  openModal: false,
})

export const addPlayerAtom = atom(null, (_get, set, input) => {
  set(playerAtom, () => {
    if(input.item) {
      const currentState = _get(playerAtom);
      // console.log(input.item)
      const {name, id, audio_url, artwork_url, duration} = input.item
      return {...currentState, name, id, audio_url, artwork_url, duration};
    }
  });
})

export const addPlayerRefAtom = atom(null, (_get, set, input) => {
  set(playerAtom, () => {
    const currentState = _get(playerAtom);
    if(input.playerRef) {      
      return {...currentState, playerRef: input.playerRef};
    } else {
      return currentState;
    }
  })
})

export const updatePlayerStatus = atom(null, (_get, set, input) => {
  set(playerAtom, () => {
    const currentState = _get(playerAtom);
    if(input) {      
      return {...currentState, ...input};
    } else {
      return currentState
    }    
  })
})

export const toggleModal = atom(null, (_get, set, input) => {
  set(playerAtom, () => {
    const currentState = _get(playerAtom);
    const { openModal } = currentState;
    return {...currentState, openModal: !openModal}
  })
})

export const changeEpisodeAtom = atom(null, (_get, set, input) => {
  set(playerAtom, () => {
    return input;
  })
})

export default {}