import React, {useEffect, useState} from "react";
import ColorThief from 'colorthief'
import QRCode from "react-qr-code";
import Select from 'react-select';
import justcastApi from '../api/justcast'
import RightSideCoverImage from './../components/RightSideCoverImage'
const colorThief = new ColorThief()

const PublicPodcast = (props) => {
  const showId = props.match.params.show_id;
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [links, setLinks] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('')
  const [rssFeed, setRssFeed] = useState('')
  const [qrCode, setQRCode] = useState({})
  const [copyFeedLink, setCopyFeedLink] = useState('Copy Feed Link')

  const copyToClipboard = () => {
    const copyText = document.querySelector('#text-rss-feed');
    copyText.select();
    document.execCommand("Copy");
    setCopyFeedLink('Copied!');
    setTimeout(() => {
      setCopyFeedLink('Copy Feed Link');      
    }, 5000)     
  }

  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}`)
    .then((res) => {
      const data = res.data;
      setShow(data)
      const _links = [
        {value: data.apple_podcast ? data.apple_podcast : data.rss_feed, name: "Apple Podcasts", label: "RSS feed / Apple Podcasts",  id: "apple_podcast"},
        // {value: res.data.private_feed.overcast_url, name: "Overcast", label: "Overcast", id: "overcast"},        
        // {value: res.data.private_feed.pocketcast_url, name: "Pocket Casts", label: "Pocket Casts", id: "pocketcasts"},
        // {value: res.data.private_feed.downcast_url, name: "Downcast", label: "Downcast", id: "downcast"},
        // {value: res.data.private_feed.breaker_url, name: "Breaker", label: "Breaker", id: "breaker"},
      ]

      if(data.spotify) {
        _links.push({value: data.spotify, name: 'Spotify', label: "Spotify", id: "spotify"})
      }

      if(data.google_podcast) {
        _links.push({value: data.google_podcast, name: 'Google Podcast', label: "Google Podcast", id: "google_podcast"})
      } 

      if(data.overcast) {
        _links.push({value: data.overcast, name: 'Overcast', label: "Overcast", id: "overcast"})
      }      

      if(data.pocket_casts) {
        _links.push({value: data.pocket_casts, name: 'Pocket Casts', label: "Pocket Casts", id: "pocket_casts"})
      }

      if(data.breaker) {
        _links.push({value: data.breaker, name: 'Breaker', label: "Breaker", id: "breaker"})
      }

      if(data.castro) {
        _links.push({value: data.castro, name: 'Castro', label: "Castro", id: "castro"})
      }

      if(data.radio_public) {
        _links.push({value: data.radio_public, name: 'Radio Public', label: "Radio Public", id: "radio_public"})
      }

      if(data.castbox) {
        _links.push({value: data.castbox, name: 'Castbox', label: "Castbox", id: "castbox"})
      } 
      
      if(data.tune_in) {
        _links.push({value: data.tune_in, name: 'Tune In', label: "Tune In", id: "tune_in"})
      }

      if(data.stitcher) {
        _links.push({value: data.stitcher, name: 'Stitcher', label: "Stitcher", id: "stitcher"})
      }

      setLinks(_links);
      setRssFeed(data.rss_feed)
      setQRCode(_links[0])
      // setBackgroundImage("https://source.unsplash.com/1600x900/?"+data.show.name.split(' ').join(','))
      setBackgroundImage(data.artwork_url_256)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id])

  return (
    <section style={{backgroundColor: "#F1F4F8"}}>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            {/* <div className="private-podcast-subscribers-page-artwork-container">
              <img src={show.artwork_url_256} alt="podcast artwork" className="private-podcast-subscribers-page-artwork"/>
            </div> */}
            <h1 className="mb-0 font-weight-bold">{show.name}</h1>
            <p className="mb-6">Add our content to your favorite podcast player</p>
            <hr/>
            <Select value={qrCode} options={links} onChange={setQRCode}/>
            <div className="private-podcast-subscribers-page-artwork-container">
              <QRCode value={qrCode.value ? qrCode.value : ""} size={200}/>
            </div>
            <hr/>
            {
              links.map((link) => {
                return (
                  <a className="btn btn-secondary btn-block lift"
                    href={link.value}
                    key={link.id}>{link.name}</a>
                )}
              )
            }                  
            <hr/>
            <div onClick={copyToClipboard} className="btn btn-secondary btn-block lift">{copyFeedLink}</div>            
            <input defaultValue={rssFeed} id="text-rss-feed" style={{position: "absolute", left: '-9999px'}}/>
          </div>
          <RightSideCoverImage imageURL={backgroundImage}/>          
        </div>        
      </div>

    </section>    
  )
}

export default PublicPodcast;