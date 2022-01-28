import React, {useContext} from "react";
import { useAtom } from 'jotai';
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import { notificationAtom, closeNotifcationAtom } from '../../jotai'
import ModalNotification from '../../components/ModalNotification'
import Footer from './Footer'

const Layout = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const [notification] = useAtom(notificationAtom);
  const [, closeModal] = useAtom(closeNotifcationAtom);

  const {bodyColor, textColor, brand_link_back} = state;
  const {title, message, active} = notification;

  return (
    <>
      <section className="py-8 py-md-11" style={{backgroundColor: bodyColor, minHeight: "600px"}}>
        <ModalNotification
          title={title}
          message={message}
          active={active}
          toggle={closeModal}
        />
        {props.children}     
      </section>  
      <Footer brand_link_back={brand_link_back} textColor={textColor}/> 
    </>
  )

}

export default Layout;