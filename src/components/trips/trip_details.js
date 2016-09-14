import React, { Component } from 'react';
import { Tabs, Tab, List, ListItem} from 'material-ui';
import TripRider from './trip_rider';
import TripRequest from './trip_request'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {
    const riders = this.props.riders.map((rider) => {
      return(
        <ListItem key={rider.id}>
          <TripRider
            {...rider}
            onRemove={this.props.onRiderRemove}
            tripId={this.props.tripId}
          />
        </ListItem>
      );
    });
    const requests = this.props.requests.map((request) => {
      return(
        <ListItem key={request.id}>
          <TripRequest {...request} onResponse={this.props.onRequestResponse} />
        </ListItem>
      )
    });
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Riders" value="a" >
          <div>
            <h2 style={styles.headline}>Riders</h2>

            <List children={riders} />
          </div>
        </Tab>

        <Tab label="Requests" value="b">
          <div>
            <h2 style={styles.headline}>Requests</h2>
            <List children={requests} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default TripDetails;
