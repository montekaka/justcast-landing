import createDataContext from './createDataContext';

const playerReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...action.payload}    
    default:
      return state
  }
}

const add = dispatch => {
  return ({audio_date, url, id, name, description, artwork, playing, hide}) => {    
    dispatch({type: 'add', payload: {audio_date, url, id, name, description, artwork, playing, hide}})
  }
}

export const {Provider, Context} = createDataContext(
  playerReducer,
  {
    add
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
  }
)

export default {}
