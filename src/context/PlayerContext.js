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
  return ({url, id, name, description, artwork}) => {
    dispatch({type: 'add', payload: {url, id, name, description, artwork}})
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
    url: "",
    description: "",
    artwork: ""
  }
)

export default {}
