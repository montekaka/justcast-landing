import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {Context as PublicPodcastContext} from '../../context/PublicPodcastContext'
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, CardFooter
} from 'reactstrap';

const EpisodeCard = (props) => {
  const {title, footer, link, artworkUrl} = props;
  const { state } = useContext(PublicPodcastContext);
  const {cardBackgroundColor, textColor} = state;

  return (
    <Link to={link} style={{textDecoration: 'none'}}>
      <Card className="shadow-lg lift lift-lg" style={{backgroundColor: cardBackgroundColor}}>
        <CardImg top width="100%" src={artworkUrl} alt={title}/>
        <CardBody>
          <p className="h6 text-uppercase" style={{color: textColor}}>{footer}</p>
          <hr className="card-meta-divider"/>
          <CardText style={{color: textColor}}>{title}</CardText>
        </CardBody>
      </Card>
    </Link>
  )
}

export default EpisodeCard;