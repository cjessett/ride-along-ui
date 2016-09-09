import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs'

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
      value: 'a',
    };
  }
  static PropTypes = {
    riders: React.PropTypes.array,
    requests: React.PropTypes.array
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Riders" value="a" >
          <div>
            <h2 style={styles.headline}>Riders</h2>
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
