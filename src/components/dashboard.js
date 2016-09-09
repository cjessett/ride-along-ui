import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../App.css';
import FindRides from './available_rides/find_rides';
import TripsView from './trips/trips_view'
import RidesView from './rides/my_rides'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'b'
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          contentContainerClassName="tab-content"
        >
          <Tab label="Find a Ride" value="a" ><FindRides user=""/></Tab>
          <Tab label="Rides I provide" value="b" ><TripsView /></Tab>
          <Tab label="Rides I'm on" value="c" ><RidesView name="Rides I'm on"/></Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;

