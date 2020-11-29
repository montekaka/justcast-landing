import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import moment from 'moment'

const FeaturedEpisode = () => {
  const { state } = useContext(PublicPodcastContext);
  const {slug, artwork_url_256, author, cardBackgroundColor, textColor, recommend_episode} = state;

  let backgroundImage = "https://images.unsplash.com/photo-1544719576-904e2d01e057?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
  if(recommend_episode && recommend_episode.artwork_url) {
    backgroundImage = recommend_episode.artwork_url
  }
  
  if(recommend_episode) {
    return (      
      <div className="card card-row mb-6 lift lift-lg" style={{backgroundColor: cardBackgroundColor}}>
        <div className="row no-gutters">
          <div className="col-12">
            <span className="badge badge-pill badge-light badge-float badge-float-inside"><span className="h6 text-uppercase">Featured</span></span>
          </div>
          <Link to={`/shows/${slug}/audioposts/${recommend_episode.id}`} style={{textDecoration: 'none', backgroundImage: `url(${backgroundImage})` }} className="col-12 col-md-6 order-md-2 bg-cover card-img-right">
            <img src={recommend_episode.artwork_url ? recommend_episode.artwork_url : "https://images.unsplash.com/photo-1544719576-904e2d01e057?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"} alt="featured-podcast" className="img-fluid d-md-none invisible"/>
            <div className="shape shape-left shape-fluid-y svg-shim d-none d-md-block" style={{color: cardBackgroundColor}}>
              <svg viewBox="0 0 112 690" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z" fill="currentColor"/></svg>
            </div>
          </Link>
          <div className="col-12 col-md-6 order-md-1">
            <Link to={`/shows/${slug}/audioposts/${recommend_episode.id}`} className="card-body">
              <h3 style={{color: textColor}}>{recommend_episode.name}</h3>
            </Link>
            <div className="card-meta">
              <hr className="card-meta-divider"/>
              <div className="avatar avatar-sm mr-2">
                <img src={artwork_url_256} alt="podcast-artwork" className="avatar-img rounded-circle"/>                
              </div>
              <h6 className="text-uppercase text-muted mr-2 mb-0">{author}</h6>
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime={recommend_episode.audio_date}>{moment(recommend_episode.audio_date).format('YYYY-MM-DD')}</time>
              </p>
            </div>              
          </div>
        </div>      
      </div>
    )
  }
  return null;
}

export default FeaturedEpisode;