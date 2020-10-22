import React, {useContext} from "react";
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'

const Layout = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const {bodyColor} = state;

  return (
    <section className="py-8 py-md-11" style={{backgroundColor: bodyColor}}>
      {props.children}
    </section>
  )
}

export default Layout;