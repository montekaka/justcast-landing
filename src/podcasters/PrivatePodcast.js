import React, {useEffect, useState} from "react";
import ColorThief from 'colorthief'
import QRCode from "react-qr-code";
import Select from 'react-select';
import justcastApi from '../api/justcast'
import RightSideCoverImage from './../components/RightSideCoverImage'
const colorThief = new ColorThief()

const PrivatePodcast = (props) => {
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
    justcastApi.get(`/v1/shows/${showId}/private_feeds/${id}`)
    .then((res) => {
      const data = res.data;
      setShow(data.show)
      const _links = [
        {value: res.data.private_feed.rss_feed, name: "Apple Podcasts", label: "RSS feed / Apple Podcasts",  id: "apple_podcast"},
        {value: res.data.private_feed.overcast_url, name: "Overcast", label: "Overcast", id: "overcast"},        
        {value: res.data.private_feed.pocketcast_url, name: "Pocket Casts", label: "Pocket Casts", id: "pocketcasts"},
        {value: res.data.private_feed.downcast_url, name: "Downcast", label: "Downcast", id: "downcast"},
        {value: res.data.private_feed.breaker_url, name: "Breaker", label: "Breaker", id: "breaker"},
      ]
      setLinks(_links);
      setRssFeed(res.data.private_feed.rss_feed)
      setQRCode(_links[0])
      // setBackgroundImage("https://source.unsplash.com/1600x900/?"+data.show.name.split(' ').join(','))
      setBackgroundImage(data.show.artwork_url_256)
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
            <div className="private-podcast-subscribers-page-artwork-container">
              <img src={show.artwork_url_256} alt="podcast artwork" className="private-podcast-subscribers-page-artwork"/>
            </div>
            <h1 className="mb-0 font-weight-bold">{show.name}</h1>
            <p className="mb-6">Add our private content to your favorite podcast player</p>
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

export default PrivatePodcast;