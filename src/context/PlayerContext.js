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
  return ({audio_date, url, id, name, description, artwork, playing}) => {    
    dispatch({type: 'add', payload: {audio_date, url, id, name, description, artwork, playing}})
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
    playing: false,
  }
)

export default {}
