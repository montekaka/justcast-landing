import React from "react";
import applePodcastSvg from '../../assets/img/icons/podcasts/apple_podcast.svg'
import googlePodcastSvg from '../../assets/img/icons/podcasts/google_podcast.svg'
import breakerSvg from '../../assets/img/icons/podcasts/breaker.svg'
import castboxSvg from '../../assets/img/icons/podcasts/castbox.svg'
import castroSvg from '../../assets/img/icons/podcasts/castro.svg'
import overcastSvg from '../../assets/img/icons/podcasts/overcast.svg'
import pocketcastSvg from '../../assets/img/icons/podcasts/pocketcast.svg'
import radiopublicSvg from '../../assets/img/icons/podcasts/radiopublic.svg'
import spotifySvg from '../../assets/img/icons/podcasts/spotify.svg'
import stitcherSvg from '../../assets/img/icons/podcasts/stitcher.svg'
import tuneinSvg from '../../assets/img/icons/podcasts/tunein.svg'
import rssSvg from '../../assets/img/icons/podcasts/rss.svg'

const IconButton = ({url, iconImg, name, subtitle}) => {
  const clickHander = () => {
    window.open(url, '_blank');
  }

  if(url){
    return (
      <button className="icon-subscribe-button lift" onClick={clickHander}>
        <img src={iconImg}/>
        <span className="icon-subscribe-items">
          <span className="icon-subscribe-subtitle">{subtitle}</span>
          <span className="icon-subscribe-title">{name}</span>    
        </span>    
      </button>
    )
  }

  return null;
}

const PodcastApps = (props) => {
  const {apple_podcast, google_podcast, overcast, spotify, pocket_casts, breaker, castro, radio_public, castbox, tune_in, stitcher, slug} = props;

  return (
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <IconButton iconImg={applePodcastSvg} name="Apple Podcasts" subtitle="LISTEN ON" url={apple_podcast}/>
          <IconButton iconImg={googlePodcastSvg} name="Google Podcasts" subtitle="LISTEN ON" url={google_podcast}/>
          <IconButton iconImg={overcastSvg} name="Overcast" subtitle="LISTEN ON" url={overcast}/>
          <IconButton iconImg={spotifySvg} name="Spotify" subtitle="LISTEN ON" url={spotify}/>
          <IconButton iconImg={pocketcastSvg} name="Pocket Casts" subtitle="LISTEN ON" url={pocket_casts}/>
          <IconButton iconImg={breakerSvg} name="Breaker" subtitle="LISTEN ON" url={breaker}/>
          <IconButton iconImg={castroSvg} name="Castro" subtitle="LISTEN ON" url={castro}/>
          <IconButton iconImg={radiopublicSvg} name="RadioPublic" subtitle="LISTEN ON" url={radio_public}/>
          <IconButton iconImg={castboxSvg} name="Castbox" subtitle="LISTEN ON" url={castbox}/>
          <IconButton iconImg={tuneinSvg} name="TuneIn" subtitle="LISTEN ON" url={tune_in}/>
          <IconButton iconImg={stitcherSvg} name="Stitcher" subtitle="LISTEN ON" url={stitcher}/>
          <IconButton iconImg={rssSvg} name="RSS Feed" subtitle="SUBSCRIBE" url={`${process.env.REACT_APP_API_PROXY_SERVER_BASE_PATH}/shows/${slug}/audioposts.rss`}/>
        </div>
      </div>
    </section>
  )
}

export default PodcastApps;