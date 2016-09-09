import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar';


class App extends Component {

  render() {
    return (
      <div id='app'>
        <MuiThemeProvider>
        <div>
          <Navbar />
          <div id='content'>
          </div>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
