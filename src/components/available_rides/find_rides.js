import React, { Component } from 'react';
import FindRidesList from './find_rides_list'
import Ride from './ride'
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

class FindRides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 3,
      listItemComponents: [],
    }
  }
  buildListComponents(array) {
    var items = array.map(function(tripObj) {
      return (
        <ListItem key={tripObj.id}>
          <Ride {...tripObj.attributes} />
        </ListItem>
      )
    });
    this.setState({listItemComponents: items})
  }
  getTrips() {
    helpers.getAvailableRides(this.state.id).then((data) => {
      this.buildListComponents(data);
    });
  }
  componentDidMount = () => {
    this.getTrips();
  }
  render() {
    return (
      <div>
        <h2 style={styles.headline}>Find A Ride</h2>
        <FindRidesList listItemComponents={this.state.listItemComponents} />
      </div>
    )
  }
}

export default FindRides;
