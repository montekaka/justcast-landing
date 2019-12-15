import createDataContext from './createDataContext';

const initState = {
  id: "",
  name: "",
  audio_date: "",
  url: "",
  description: "",
  artwork: "",
  hide: true,
  playing: false,
  duration: 0,
  loaded: 0, // in percentage
  loadedSeconds: 0,
  played: 0, // in percentage
  playedSeconds: 0,
  seeking: false
}

const playerReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...state, ...action.payload}
    case 'play_pause':
      return {...state, playing: !state.playing}
    case 'hide_footer_bar': 
      return {...state, hide: !state.hide}
    case 'update_duration':
      return {...state, ...action.payload}
    case 'update_progress':
      // We only want to update time slider if we are not currently seeking
      if(!state.seeking) {
        return {...state, ...action.payload}
      }
      return {...state};
    case 'toggle_seeking':
      return {...state, seeking: !state.seeking}
    case 'seek_change':
      return {...state, ...action.payload}
    case 'reset': 
      return {...initState}
    default:
      return state
  }
}

const add = dispatch => {
  return ({audio_date, url, id, name, description, artwork}) => {
    dispatch({type: 'reset'})
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
    dispatch({type: 'play_pause'});
  }
}

const updateDuration = dispatch => {
  return (duration) => {
    dispatch({type: 'update_duration', payload: {duration: duration}})
  }
}

const updateProgress = dispatch => {
  return (progress) => {
    //console.log(progress)
    dispatch({type: 'update_progress', payload: {...progress}})
  }
}

const toggleSeeking = dispatch => {
  return () => {
    dispatch({type: 'toggle_seeking', payload: {}})
  }
}

const handleSeekChange = dispatch => {
  return (playedSeconds) => {
    dispatch({type: 'seek_change', payload: {playedSeconds: playedSeconds}})
  }
}

// const hideFooterBar = dispatch => {
//   return () => {
//     dispatch({type: 'hide_footer_bar'});
//   }
// }

export const {Provider, Context} = createDataContext(
  playerReducer,
  {
    add,
    playPause,
    updateDuration,
    updateProgress,
    toggleSeeking,
    handleSeekChange
  },
  initState
)

export default {}
