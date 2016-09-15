import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TripCardPreview from './card_preview';
import TripDetails from './trip_details';
import helpers from '../../utils/time_helpers'

class Trip extends Component {
  static propTypes = {
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    riders: React.PropTypes.array,
    requests: React.PropTypes.array
  }
  handleTime = (time) => {
    return helpers.formatTime(time);
  }
  render() {
    return (
      <Card>
        <CardHeader
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
          children={
            <TripCardPreview
              departure={this.handleTime(this.props.departure)}
              arrival={this.handleTime(this.props.arrival)}
            />
          }
        />
        <CardText expandable={true}>
          <TripDetails
            tripId={this.props.id}
            riders={this.props.riders}
            requests={this.props.requests}
            onRequestResponse={this.props.onResponse}
            onRiderRemove={this.props.onRiderRemove}
          />
        </CardText>
      </Card>
    );
  }
}

export default Trip;
