import React, { useEffect } from "react";
import {trackingConfigs} from '../../libs'
import ReactPixel from 'react-facebook-pixel';

const FacebookPixel = ({code}) => {
  const options = {
    autoConfig: false,
  };

  useEffect(() => {
    // 844829586119722
    // console.log(code)
    ReactPixel.init(code, options);
    ReactPixel.pageView('Podcast page view');    
  }, [code])

  if(code) {
    // const pixel = trackingConfigs.facebookPixelBaseCode(code);
    // const {scriptCode, noscriptCode} = pixel;

    return (
      <></>
    )
  }

  return null;
}

export default FacebookPixel;