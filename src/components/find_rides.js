import React, { Component } from 'react';
import Ride from './ride'
import {List, ListItem} from 'material-ui/List';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const cjProps = { name: "CJ", rating: "4.9", departure: "7:30a", arrival: "8a" }

const items = [<ListItem primaryText="Inbox" key={1} />,<ListItem primaryText="Inbox" key={2}/>]

class FindRides extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.headline}>Find Rides</h2>
          <Ride {...cjProps} />
          <List children={items}>
          </List>
      </div>
    )
  }
}

export default FindRides;
