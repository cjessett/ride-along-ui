import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RideData from './card_deets'

class Ride extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          subtitle={this.props.rating + "/5"}
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
          children={<RideData {...this.props} />}
        />
        <CardText expandable={true}>
          Trip info
        </CardText>
      </Card>
    );
  }
}

export default Ride;
