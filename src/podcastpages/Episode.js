import React, {useEffect, useState, useContext} from "react";
import moment from 'moment'
import justcastApi from '../api/justcast'
import ReactGA from 'react-ga';
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery, useFetch} from '../hooks'
import {Layout, SimplePageHeader, EpisodeArtwork, EpisodeImages, EpisodePlayer, PodcastApps, MeetTheHosts} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';
import {redirectPageShowId} from '../libs'
import {NinjaPlayer} from 'react-podcast-ninja'

const getAudiopostById = (audioposts, id) => {
  const _ = audioposts.filter(audiopost => audiopost.id.toString() === id.toString());
  if(_.length > 0) {
    return _[0];
  }
  return null;
}

const Episode = (props) => {
  const id = redirectPageShowId(props.match.params.show_id);
  const audiopost_id = props.match.params.id;
  const { state } = useContext(PublicPodcastContext);
  const {data, isPending, error} = useFetch(`/v3/shows/${redirectPageShowId(id)}/audioposts/${audiopost_id}.json`)
  
  const {podcast_title, textColor, amazon_podcast_link, apple_podcast, 
    google_podcast, overcast, spotify, pocket_casts, breaker, castro, radio_public, 
    castbox, tune_in, stitcher, podverse, fountain, slug
  } = state;
  const _ = useShowQuery(id);
  
  useEffect(() => {
    if(state.id && state.google_analytics_id) {
      const googleAnalyticsId = state.google_analytics_id;
      ReactGA.initialize(googleAnalyticsId);
      ReactGA.pageview(`/shows/${state.slug}/audioposts/${audiopost_id}`)
    }
  }, [id, audiopost_id])

  if(state.is_private) {
    return <PrivateShow/>;
  }

  if(isPending || error) return null;

  return (
    <>
      <SimplePageHeader
        title={data?.name}
        text={data?.audio_date}  
      >
        <a className="btn btn-primary lift" href={data?.audio_url} download={data?.name} alt={`Download ${data?.name}`} target="_blank">
          <i className="fe fe-download"/> Download
        </a>
      </SimplePageHeader>
      <Layout>                                     
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
            <NinjaPlayer
              configs={{
                hidePubDate: state.hide_widget_pub_date,
                hideMoreInfo: true,
                primaryBackgroundColor: state.widget_primary_background_color || "#0c1824",
                primaryButtonColor: state.widget_primary_button_color || "#f7f8f9",
                primaryTextColor: state.widget_primary_text_color || "#f7f8f9",
                progressBarFilledColor: state.widget_progress_bar_filled_color || "#f7f8f9",
                progressBarBackgroundColor: state.widget_progress_bar_background_color || "#8A8175",
                playlistBackgroundColor: state.widget_playlist_background_color || "#30343c",
                playlistTextColor: state.widget_playlist_text_color || "#f7f8f9",
                chapterBackgroundColor: state.widget_chapter_background_color || "#30343c",
                chapterTextColor:  state.widget_chapter_text_color || "#f7f8f9"
              }}
              playerId={`${data?.id}-single`}
              episodes={[{
                title: data?.episode_title,
                description: data?.description,
                podcastTitle: podcast_title,
                artworkUrl: data?.artwork_url,
                pubDate: data?.audio_date,
                link: data?.single_page_url,
                audioUrl: data?.audio_url,
                chaptersUrl: data?.chapters_url,
              }]}
              singleEpisode={true}
              themeName="retro"
            />  
            </div>
          </div>  
          <br/>
          <MeetTheHosts
            title={state.meet_hosts_title}
            items={data?.people}
            textColor={state.textColor}            
          />
          <div className="row justify-content-center" style={{color: textColor}}>
            <div className="col-12 col-md-10 col-lg-9 col-xl-8" 
              dangerouslySetInnerHTML={{__html: data?.description}}/>
            <EpisodeArtwork artwork={data?.item_image} name={data?.episode_title}/>
            {/* <EpisodeImages images={data.images}/>             */}
          </div>
        </div> 
        <PodcastApps 
            apple_podcast={apple_podcast}
            google_podcast={google_podcast}
            overcast={overcast}
            spotify={spotify}
            pocket_casts={pocket_casts}
            breaker={breaker}
            castro={castro}
            radio_public={radio_public}
            castbox={castbox}
            tune_in={tune_in}
            stitcher={stitcher}
            podverse={podverse}
            fountain={fountain}
            amazon_podcast_link={amazon_podcast_link}
            slug={slug}
          >        
            <div className="row justify-content-center">
              Listen in your favorite apps
            </div>
        </PodcastApps>                
      </Layout>
    </>
  )  
}

export default Episode;