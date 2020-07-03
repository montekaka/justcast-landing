import React, {useEffect, useState} from "react";
import ColorThief from 'colorthief'
import justcastApi from '../api/justcast'
import RightSideCoverImage from './../components/RightSideCoverImage'
const colorThief = new ColorThief()

const PrivatePodcast = (props) => {
  const showId = props.match.params.show_id;
  const id = props.match.params.id;
  const [show, setShow] = useState({});
  const [links, setLinks] = useState([]);
  
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
        {url: res.data.private_feed.rss_feed, name: "Copy Feed Link", kind: "action", id: "rssfeed"}, 
      ]
      setLinks(_links);
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
            {
              links.map((link) => 
                <div className="btn btn-secondary btn-block lift" 
                  key={link.id}>{link.name}</div>
              )
            }
          </div>
          <RightSideCoverImage imageURL={"https://source.unsplash.com/collection/190727/1600x900"}/>
        </div>        
      </div>

    </section>    
  )
}

export default PrivatePodcast;