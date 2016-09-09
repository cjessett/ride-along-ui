import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TripCardPreview from './card_preview';
import TripDetails from './trip_details'

class Trip extends Component {
  static propTypes = {
    driver: React.PropTypes.string.isRequired,
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string,
    count: React.PropTypes.number
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
          children={<TripCardPreview {...this.props} />}
        />
        <CardText expandable={true}>
          <TripDetails />
        </CardText>
      </Card>
    );
  }
}

export default Trip;
