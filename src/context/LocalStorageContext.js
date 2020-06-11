import createDataContext from './createDataContext';
import {localStorageManagement} from './../libs'

const LocalStorageReducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {...state, ...action.payload}
    default:
      return state
  }
}

const initLocalStorageState = dispatch => {
  return (params) => {
    const item = localStorageManagement.getAll();
    // console.log(item)
    dispatch({type: 'add', payload: {...item, ...params} })
  }
}

const add = dispatch => {
  return ({key, val}) => {
    const item = localStorageManagement.setItem(key, val);
    dispatch({type: 'add', payload: item })
  }
}

const remove = dispatch => {
  return ({key}) => {
    localStorageManagement.removeItem(key);
    dispatch({type: 'add', payload: {[key]: null} })
  }
}

const getURL = () => {
  return (state, url) => {  
    const items = Object.entries(state);
    const strings = [];
    items.forEach(([key, val]) => {
      strings.push(`${key}=${val}`);
    })
    const params = strings.join('&');
    if(strings.length > 0) {
      return `${url}?${params}`
    }
    return url;
  }  
}

export const {Provider, Context} = createDataContext(
  LocalStorageReducer,
  {
    initLocalStorageState,
    add,
    getURL,
    remove
  },
  {
    
  }
)

export default {}