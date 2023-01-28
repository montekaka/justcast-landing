import { useState, useEffect } from 'react';
import justcastApi from '../api/justcast'

const useFetch = (url) => {

  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let subscribed = true;

    if(url) {
      justcastApi.get(url)
      .then((res) => {
        if(subscribed) {
          setIsPending(false)
          setData(res.data)
        }
      })
      .catch((err) => {
        if(subscribed) {
          setIsPending(false)
          setError(err);
        }
      })
    }   
    
    return () => {
      subscribed = false;
    }    
  }, [url])

  return {data, isPending, error}
}

export default useFetch;