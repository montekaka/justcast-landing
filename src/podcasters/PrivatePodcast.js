import React, {useEffect, useState} from "react";
import ColorThief from 'colorthief'
import justcastApi from '../api/justcast'
import QRCode from "react-qr-code";
import RightSideCoverImage from './../components/RightSideCoverImage'
const colorThief = new ColorThief()

const PrivatePodcast = (props) => {
  const showId = props.match.params.show_id;
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [links, setLinks] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('')
  const [rssFeed, setRssFeed] = useState('')

  const copyToClipboard = () => {
    const copyText = document.querySelector('#text-rss-feed');
    copyText.select();
    document.execCommand("Copy");
  }
  
  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}/private_feeds/${id}`)
    .then((res) => {
      const data = res.data;
      setShow(data.show)
      const _links = [
        {url: res.data.private_feed.rss_feed, name: "Apple Podcasts", kind: "link", id: "apple_podcast"},
        {url: res.data.private_feed.overcast_url, name: "Overcast", kind: "link", id: "overcast"},
        {url: res.data.private_feed.breaker_url, name: "Breaker", kind: "link", id: "breaker"},
        {url: res.data.private_feed.pocketcast_url, name: "Pocket Casts", kind: "link", id: "pocketcasts"},
        {url: res.data.private_feed.downcast_url, name: "Downcast", kind: "link", id: "downcast"},
        {url: res.data.private_feed.rss_feed, name: "Copy Feed Link", kind: "copyToClipboard", id: "rssfeed"}, 
      ]
      setLinks(_links);
      setRssFeed(res.data.private_feed.rss_feed)
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
            <div className="private-podcast-subscribers-page-artwork-container">
              <QRCode value={rssFeed} size={128}/>
            </div>            
            {
              links.map((link) => {
                if(link.kind === 'copyToClipboard') {
                  return (
                    <div 
                      key={link.id}
                      onClick={copyToClipboard}
                      className="btn btn-secondary btn-block lift">{link.name}</div>
                  )
                }
                return (
                  <a className="btn btn-secondary btn-block lift"
                    href={link.url}
                    key={link.id}>{link.name}</a>
                )}
              )
            }
            
            <input defaultValue={rssFeed} id="text-rss-feed" style={{position: "absolute", left: '-9999px'}}/>
          </div>
          <RightSideCoverImage imageURL={backgroundImage}/>          
        </div>        
      </div>

    </section>    
  )
}

export default PrivatePodcast;