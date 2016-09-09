import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RideData from './card_deets';
import RaisedButton from 'material-ui/RaisedButton';
import helpers from '../../utils/helpers'

class Ride extends Component {
  state = {
    requestStatus: false
  }
  static propTypes = {
    driver: React.PropTypes.string.isRequired,
    departure: React.PropTypes.string.isRequired,
    arrival: React.PropTypes.string.isRequired,
    rating: React.PropTypes.string,
    count: React.PropTypes.number,
    email: React.PropTypes.string,
  }
  handleClick = (e) => {
    e.preventDefault();
    var status = helpers.joinTripRequest(this.props.trip, this.props.user);
    if (status) {
      this.setState({requestStatus: true})
    }
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
          <RaisedButton onClick={this.handleClick}
                        label="Request to Join"
                        fullWidth={true}
                        primary={true}
                        disabled={this.state.requestStatus}
                        disabledBackgroundColor="green" />
        </CardText>
      </Card>
    );
  }
}

export default Ride;
