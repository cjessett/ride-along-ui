import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RideData from './card_deets';
import RaisedButton from 'material-ui/RaisedButton';

class AvailableRide extends Component {
  static propTypes = {
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired
  }
  handleJoinRequest = () => {
    this.props.onRequest(this.props.id);
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.driver.name}
          subtitle={this.props.driver.rating + "/5"}
          avatar=""
          actAsExpander={true}
          showExpandableButton={true}
          children={<RideData {...this.props} />}
        />
        <CardText expandable={true}>
          <p>Riders: {this.props.count}</p>
          <p>Driver's Email: {this.props.driver.email}</p>

          <RaisedButton
            onClick={this.handleJoinRequest}
            label={this.props.pending ? "Requested" : "Request to Join"}
            fullWidth={true}
            primary={true}
            disabled={this.props.pending}
          />
        </CardText>
      </Card>
    );
  }
}

export default AvailableRide;
