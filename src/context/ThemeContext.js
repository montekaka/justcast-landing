import createDataContext from './createDataContext';

const initState = {
  backgroundColor: null, 
  highlightColor: null, 
  cardBackgroundColor: null,
  textColor: null, 
  linkColor: null,
  buttonColor: null,
  playerBackgroundColor: null,
  playerTextColor: null,
  playerButtonColor: null
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
    highlightColor, 
    cardBackgroundColor,
    textColor, 
    linkColor,
    buttonColor,
    playerBackgroundColor,
    playerTextColor,
    playerButtonColor
  }) => {
    dispatch({type: 'add', payload: {
      backgroundColor, 
      highlightColor, 
      cardBackgroundColor,
      textColor, 
      linkColor,
      buttonColor,
      playerBackgroundColor,
      playerTextColor,
      playerButtonColor
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