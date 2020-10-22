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
        <CardTitle>{title}</CardTitle>
      </CardBody>
      <div className="card-meta">
        <hr className="card-meta-divider"/>
        <p className="h6 text-uppercase text-muted mb-0 ml-auto">{footer}</p>
      </div>
    </Card>
  )
}

export default EpisodeCard;