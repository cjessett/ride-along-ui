import React, { Component } from 'react';
import {List} from 'material-ui/List';

class FindRidesList extends Component {
  render() {
    return(
      <List children={this.props.listItemComponents}></List>
    )
  }
}

export default FindRidesList;
