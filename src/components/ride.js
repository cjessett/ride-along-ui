import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

// make component
const Ride = () => (
  <Card>
    <CardHeader
      title="With Avatar"
      avatar=""
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default Ride;
