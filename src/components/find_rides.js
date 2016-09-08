import React, { Component } from 'react';
import FindRidesList from './find_rides_list'
import Ride from './ride'
import {ListItem} from 'material-ui/List';
import helpers from '../utils/helpers';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class FindRides extends Component {
  state = {
      listItemComponents: []
  }
  buildListComponents(array) {
    debugger
    var items = array.map(function(tripObj) {
      return <ListItem><Ride {...tripObj.attributes} key={tripObj.id} /></ListItem>
    });
    this.setState({listItemComponents: items})
  }
  componentDidMount() {
    helpers.getTripInfo().then((data) => {
      this.buildListComponents(data);
    });
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
