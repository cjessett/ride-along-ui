import React, { Component } from 'react';
import { Tabs, Tab, List, ListItem} from 'material-ui';

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
  buildRiderComponents(array) {
    var riders = array.map(function(rider) {
      return (
        <ListItem key={rider.id}>
          {rider.name}
        </ListItem>
      )
    });
    this.setState({riderComponents: riders})
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  componentDidMount = () => {
    this.buildRiderComponents(this.props.riders);
  }
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
          {request.user}
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
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default TripDetails;
