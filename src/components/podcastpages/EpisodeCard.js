import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, CardFooter
} from 'reactstrap';

const EpisodeCard = (props) => {
  const {title, footer, link, artworkUrl} = props;

  return (
    <Card className="shadow-lg lift lift-lg">
      <CardImg top width="100%" src={artworkUrl} alt={title}/>
      <CardBody>
        <p className="h6 text-uppercase">{footer}</p>
        <hr className="card-meta-divider"/>
        <CardText>{title}</CardText>
      </CardBody>
    </Card>
  )
}

export default EpisodeCard;