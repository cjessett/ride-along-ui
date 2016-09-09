import React, { Component } from 'react';
import TripList from './trip_list'
import Trip from './trip'
import {ListItem} from 'material-ui/List';
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

class TripsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      listItemComponents: []
    }
  }
  buildListComponents(array) {
    var tripCards = array.map(function(tripObj) {
      return (
        <ListItem key={tripObj.id}>
          <Trip {...tripObj.attributes} />
        </ListItem>
      )
    });
    this.setState({listItemComponents: tripCards})
  }
  getTrips() {
    helpers.getMyTrips(this.state.id).then((data) => {
      this.buildListComponents(data);
    });
  }
  componentDidMount = () => {
    this.getTrips();
  }
  render() {
    return (
      <div>
        <h2 style={styles.headline}>Trips I Drive</h2>
        <TripList listItemComponents={this.state.listItemComponents} />
      </div>
    )
  }
}

export default TripsView;
