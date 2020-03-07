import React, {useEffect, useState} from "react";
import justcastApi from '../api/justcast'
import WidgetPlayerControl from './WidgetPlayerControl';

const SingleWidgetPlayer = (props) => {
  const id = props.match.params.id;
  const showId = props.match.params.show_id;  
  const [audiopost, setAudiopost] = useState({});
  const [show, setShow] = useState({});

  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}/audioposts/${id}`)
    .then((res) => {
      const data = res.data;
      setAudiopost(data)
      setShow(data.show);
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
        />
      </>
    )
  }
  return null;
}

export default SingleWidgetPlayer