  import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH 
})

export default instance;