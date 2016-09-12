import React, { Component } from 'react';
import TripList from './trip_list'
import Trip from './trip'
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
    helpers.getMyTrips(this.state.id).then((trips) => {
      this.setState({trips: trips});
    });
  }
  handleTripRequest = (requestId) => {
    // PUT to /requests/requestId
    this.updateState();
  }
  render() {
    const trips = this.state.trips.map((trip) => {
      return(
        <ListItem key={trip.id}>
          <Trip
            {...trip.attributes}
            id={trip.id}
            onResponse={this.handleTripRequest}
          />
        </ListItem>
      );
    });
    return (
      <div>
        <h2 style={styles.headline}>Trips I Drive</h2>
        <List children={trips} />
      </div>
    )
  }
}

export default TripsList;
