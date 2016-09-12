import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TripCardPreview from './card_preview';
import TripDetails from './trip_details'

class Trip extends Component {
  static propTypes = {
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    riders: React.PropTypes.array,
    requests: React.PropTypes.array
  }
  render() {
    return (
      <Card>
        <CardHeader
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
          children={<TripCardPreview
            departure={this.props.departure}
            arrival={this.props.arrival}
          />}
        />
        <CardText expandable={true}>
          <TripDetails
            riders={this.props.riders}
            requests={this.props.requests}
            onRequestResponse={this.props.onResponse}
          />
        </CardText>
      </Card>
    );
  }
}

export default Trip;
