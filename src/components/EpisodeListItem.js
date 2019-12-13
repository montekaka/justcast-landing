import React from 'react';
import {
  Card, CardBody, Button
} from 'reactstrap';

import { Media } from 'reactstrap';

const EpisodeListItem = ({name}) => {
  return (
    <Card className="col-12">
      <CardBody>
        <Media>
          <Media left href="#">
            <img src="http://download.randgad.com/images/RandGadArt.jpg" className="mr-3" alt="..."/>
          </Media>
          <Media body>
            <Media heading>
              {name}
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </CardBody>      
    </Card>
  )
}

export default EpisodeListItem;