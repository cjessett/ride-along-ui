import React, { Component } from 'react';
import Trip from './trip';
import { List, ListItem } from 'material-ui/List';
import helpers from '../../utils/helpers';
import CreateTrip from './create_trip'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    fontStyle: 'sans-serif'
  },
};

class TripsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      trips: []
    }
  }
  componentDidMount = () => {
    this.updateState();
  }
  updateState = () => {
    helpers.getMyTrips(this.state.id)
      .then((trips) => {
        this.setState({trips: trips});
      });
  }
  handleRequestResponse = (request_id, response) => {
    helpers.respondToTripRequest(request_id, response)
      .then((response) => {
        this.updateState();
      })
  }
  handleRiderRemove = (trip_id, user_id) => {
    helpers.removeRider(trip_id, user_id)
      .then((response) => {
        this.updateState();
      })
  }
  render() {
    const trips = this.state.trips.map((trip) => {
      return(
        <ListItem key={trip.id}>
          <Trip
            {...trip}
            id={trip.id}
            onResponse={this.handleRequestResponse}
            onRiderRemove={this.handleRiderRemove}
          />
        </ListItem>
      );
    });
    return (
      <div>
        <h2 style={styles.headline}>Trips I Drive</h2>
        <CreateTrip />
        <List children={trips} />
      </div>
    )
  }
}

export default TripsList;
