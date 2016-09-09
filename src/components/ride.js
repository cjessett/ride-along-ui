import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RideData from './card_deets';

class Ride extends Component {
  static propTypes = {
    driver: React.PropTypes.string.isRequired,
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string,
    riders: React.PropTypes.number,
    email: React.PropTypes.string,
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.driver}
          subtitle={this.props.rating + "/5"}
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
          children={<RideData {...this.props} />}
        />
        <CardText expandable={true}>
          <p>Riders: {this.props.riders}</p>
          <p>Driver's Email: {this.props.email}</p>
        </CardText>
      </Card>
    );
  }
}

export default Ride;
