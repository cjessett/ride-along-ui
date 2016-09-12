import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../App.css';
import AvailableRidesList from './available_rides/available_rides_list'
import TripsList from './trips/trips_list'
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
          <Tab label="Find a Ride" value="a" ><AvailableRidesList /></Tab>
          <Tab label="Rides I provide" value="b" ><TripsList /></Tab>
          <Tab label="Rides I'm on" value="c" >My Rides</Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;

