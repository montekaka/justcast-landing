  
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
  return ({show, audioposts}) => {
    dispatch({type: 'add', payload: {show, audioposts}})
  }
}

export const {Provider, Context} = createDataContext(
  podcastReducer,
  {
    add
  },
  {
    show: {},
    audioposts: []
  }
)

export default {}