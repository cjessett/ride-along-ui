import React, { Component } from 'react';
import { Tabs, Tab, List, ListItem} from 'material-ui';
import TripRider from './trip_rider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }
  componentDidMount = (requestId) => {
    this.updateState(requestId);
  }
  updateState = (requestId) => {
    this.props.onRequestResponse(requestId);
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {
    const riders = this.props.riders.map((rider) => {
      return(
        <ListItem key={rider.id}>
          {rider.name}
        </ListItem>
      );
    });
    const requests = this.props.requests.map((request) => {
      return(
        <ListItem key={request.id}>
          {request.name}
        </ListItem>
      )
    });
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Riders" value="a" >
          <div>
            <h2 style={styles.headline}>Riders</h2>
            <List children={riders} />
          </div>
        </Tab>

        <Tab label="Requests" value="b">
          <div>
            <h2 style={styles.headline}>Requests</h2>
            <List children={requests} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default TripDetails;
