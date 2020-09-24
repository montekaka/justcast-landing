import createDataContext from './createDataContext';

const initState = {
  backgroundColor: "#F2F3F9", 
  // highlightColor: null, 
  cardBackgroundColor: "#A9B0CE",
  textColor: "#6359EF", 
  linkColor: "#D3674E",
  buttonColor: "#D3674E",
  buttonTextColor: "#fff",
  playerBackgroundColor: null,
  playerTextColor: null,
  playerButtonColor: null,
  navBarColorTheme: "navbar-light"
}

const themeReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...action.payload}
    default:
      return state
  }
}

const add = dispatch => {
  return ({
    backgroundColor, 
    // highlightColor, 
    cardBackgroundColor,
    textColor, 
    linkColor,
    buttonColor,
    buttonTextColor,
    playerBackgroundColor,
    playerTextColor,
    playerButtonColor,
    navBarColorTheme
  }) => {
    dispatch({type: 'add', payload: {
      backgroundColor, 
      // highlightColor, 
      cardBackgroundColor,
      textColor, 
      linkColor,
      buttonColor,
      playerBackgroundColor,
      playerTextColor,
      buttonTextColor,
      playerButtonColor,
      navBarColorTheme
    }})
  }
}

export const {Provider, Context} = createDataContext(
  themeReducer,
  {
    add
  },
  initState
)

export default {}