import React, { Component } from 'react';
import AvailableRide from './available_ride'
import { List, ListItem } from 'material-ui/List';
import helpers from '../../utils/helpers';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    fontStyle: 'sans-serif'
  },
};

class AvailableRidesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 3,
      trips: [],
    }
  }
  componentDidMount = () => {
    this.updateState();
  }
  updateState = () => {
    helpers.getAvailableRides(this.state.user_id)
      .then((trips) => {
        this.setState({trips: trips})
      })
  }
  handleJoinRequest = (trip_id) => {
    helpers.joinTripRequest(trip_id, this.state.user_id)
      .then((response) => {
        this.updateState();
      })
  }
  render() {
    const trips = this.state.trips.map((trip) => {
      return(
        <ListItem key={trip.id}>
          <AvailableRide
            {...trip}
            id={trip.id}
            onRequest={this.handleJoinRequest}
          />
        </ListItem>
      );
    });
    return (
      <div>
        <h2 style={styles.headline}>Find A Ride</h2>
        <List children={trips} />
      </div>
    )
  }
}

export default AvailableRidesList;
