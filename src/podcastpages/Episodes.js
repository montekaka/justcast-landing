import React, {useEffect, useState, useContext, useMemo} from "react";
import ReactGA from 'react-ga';
import {Link, useLocation} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery, useFetch} from '../hooks'
import {Layout, SimplePageHeader, EpisodeList} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';
import {redirectPageShowId} from '../libs'
import { Button, Spinner } from "reactstrap"

const Episodes = (props) => {
  const { pathname } = useLocation();
  const {id} = props.match.params;
  const url = props.match.url
  const params = new URLSearchParams(props.location.search);
  const pageNumber = params.get('page_number');
  const endpoint = `/v3/shows/${redirectPageShowId(id)}/audioposts?page=${pageNumber ? pageNumber : 1}`;
  const endpointUrl = useMemo(() => ({endpoint}), [endpoint]);
  const { state } = useContext(PublicPodcastContext);
  const {textColor, buttonColor, buttonTextColor} = state;
  
  const {data, isPending, error} = useFetch(endpointUrl.endpoint)

  const _ = useShowQuery(id);

  const newLink = (page) => {
    return `${url}?page_number=${page}`
  }

  useEffect(() => {
    if(pageNumber) {
      window.scrollTo(0, 0);
    }    
  }, [pageNumber])

  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/episodes`)
    }
  }, [id])

  if(state.is_private) {
    return <PrivateShow/>;
  }

  if(!data) return null;
  if(error) return null;
  const { total_episodes, total, current_page, prev_page, next_page} = data;  
  
  return (
    <>
      <SimplePageHeader
        title={state?.podcast_title}
        subTitle={`Page: ${current_page}`}
        text={`Total episodes: ${total_episodes}`}  
      />
      <Layout>      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h2 className="font-weight-bold" style={{color: textColor}}>Episodes</h2>
              {isPending && <Spinner color="primary"/>}
            </div>
          </div>
          <div className="form-row" id="episodes">
            <EpisodeList slug={state?.slug} items={data?.audioposts}/>
          </div>
          <div style={{display: 'flex', gap: "10px", marginTop: "10px", flexDirection: "column"}}>
            <div style={{display: 'flex', justifyContent: "flex-end", gap: "10px"}}>
              {current_page > 1 && <Link className="btn" to={newLink(current_page - 1)} style={{backgroundColor: buttonColor, color: buttonTextColor}}>Previous</Link>}
              {current_page !== total && <Link className="btn" to={newLink(current_page + 1)} style={{backgroundColor: buttonColor, color: buttonTextColor}}>Next</Link>}
            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
              <div style={{display: 'flex', gap: "4px"}}><span>{current_page}</span><span>/</span><span>{total}</span></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )  
}

export default Episodes;
