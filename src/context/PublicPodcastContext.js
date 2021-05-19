import createDataContext from './createDataContext';

const initState = {
  backgroundColor: null, 
  backgroundColorClass: null,
  cardBackgroundColor:  null,
  textColor: null, 
  linkColor: null,
  buttonColor: null,
  buttonTextColor: null,
  navbarColorTheme: null,
  audioposts: [],
  facebook_pixel_base_code: null,
  recommend_episode: null,
}

const publicPodcastReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...action.payload}
    default:
      return state
  }
}

const add = dispatch => {
  return ({show, audioposts, recommend_episode}) => {    
    dispatch({type: 'add', payload: {...show, audioposts, recommend_episode}})
  }
}

export const {Provider, Context} = createDataContext(
  publicPodcastReducer,
  {
    add
  },
  initState
)

export default {}