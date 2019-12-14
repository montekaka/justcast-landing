import createDataContext from './createDataContext';

const playerReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...state, ...action.payload}
    case 'playPause':
      return {...state, playing: !state.playing}
    case 'hideFooterBar': 
      return {...state, hide: !state.hide}
    default:
      return state
  }
}

const add = dispatch => {
  return ({audio_date, url, id, name, description, artwork}) => {    
    dispatch({type: 'add', payload: {
      audio_date, 
      url, 
      id, 
      name, 
      description, 
      artwork, 
      playing: true, 
      hide: false
    }})
  }
}

const playPause = dispatch => {
  return () => {
    dispatch({type: 'playPause'});
  }
}

// const hideFooterBar = dispatch => {
//   return () => {
//     dispatch({type: 'hideFooterBar'});
//   }
// }

export const {Provider, Context} = createDataContext(
  playerReducer,
  {
    add,
    playPause
  },
  {
    id: "",
    name: "",
    audio_date: "",
    url: "",
    description: "",
    artwork: "",
    hide: true,
    playing: false,
    seeking: true,
  }
)

export default {}
