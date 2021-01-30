import React, {useContext} from "react";
import { useAtom } from 'jotai';
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import { notificationAtom, closeNotifcationAtom } from '../../jotai'
import ModalNotification from '../../components/ModalNotification'

const Layout = (props) => {
  const { state } = useContext(PublicPodcastContext);
  const [notification] = useAtom(notificationAtom);
  const [, closeModal] = useAtom(closeNotifcationAtom);

  const {bodyColor} = state;
  const {title, message, active} = notification;

  return (
    <section className="py-8 py-md-11" style={{backgroundColor: bodyColor}}>
      <ModalNotification
        title={title}
        message={message}
        active={active}
        toggle={closeModal}
      />
      {props.children}
    </section>
  )

}

export default Layout;