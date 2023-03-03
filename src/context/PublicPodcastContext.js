import createDataContext from './createDataContext';

const initState = {
  about_page_title: null,
  backgroundColor: null, 
  backgroundColorClass: null,
  cardBackgroundColor:  null,  
  textColor: null, 
  linkColor: null,
  buttonColor: null,
  buttonTextColor: null,
  navbarColorTheme: null,
  audioposts: [],
  people: [],
  facebook_pixel_base_code: null,
  recommend_episode: null,
  brand_link_back: null,
  hide_subscribe_page: false,
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
  return (show) => {   
    dispatch({type: 'add', payload: {...show}})
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