import React, {useEffect, useState} from "react";
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';

const SingleWidgetPlayer = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;  
  const [audiopost, setAudiopost] = useState({});
  const [show, setShow] = useState({});
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}/audioposts/${id}`)
    .then((res) => {
      const data = res.data;
      setAudiopost(data)
      setShow(data.show);
      const menus = [];
      if(data.show.hide_widget_subscribe !== true) {
        menus.push({key: 'subscribe', label: 'subscribe'})
      }
      if(data.show.hide_widget_share !== true) {
        menus.push({key: 'share', label: 'share'})
      }
      menus.push({key: 'more_info', label: 'more info'})
      setMenuItems(menus)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [showId, id])  

  if(audiopost.id) {
    return (
      <>
        <WidgetPlayerControl
          id={id}
          showId={showId}
          show={show}
          playerControlSquare={true}
          audiopostData={audiopost}
          menuItems={menuItems}
        />
      </>
    )
  }
  return null;
}

export default SingleWidgetPlayer