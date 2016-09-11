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
      id: 1,
      listItemComponents: [],
    }
  }
  buildListComponents(array) {
    var self = this;
    var items = array.map(function(tripObj) {
      return (
        <ListItem key={tripObj.id}>
          <Ride {...tripObj.attributes}
            trip={tripObj.id}
            user={self.state.id}
          />
        </ListItem>
      )
    });
    this.setState({listItemComponents: items})
  }
  findRides() {
    helpers.getAvailableRides(this.state.id).then((data) => {
      this.buildListComponents(data);
    });
  }
  componentDidMount = () => {
    this.findRides();
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
