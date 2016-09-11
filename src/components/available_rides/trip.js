import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RideData from './card_deets';
import RaisedButton from 'material-ui/RaisedButton';

class Trip extends Component {
  static propTypes = {
    driver: React.PropTypes.string.isRequired,
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string,
    count: React.PropTypes.number,
    email: React.PropTypes.string,
    pending: React.PropTypes.bool
  }
  handleJoinRequest = () => {
    this.props.onRequest(this.props.id);
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
          <p>Riders: {this.props.count}</p>
          <p>Driver's Email: {this.props.email}</p>

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

export default Trip;
