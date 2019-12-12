  
import createDataContext from './createDataContext';

const podcastReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...action.payload}
    default:
      return state
  }
}

const add = dispatch => {
  return ({audioposts}) => {
    dispatch({type: 'add', payload: {audioposts}})
  }
}

export const {Provider, Context} = createDataContext(
  podcastReducer,
  {
    add
  },
  {
    audioposts: []
  }
)

export default {}