import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar';
import Dashboard from './components/tabs';
import GetStuff from './components/getButton';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <GetStuff />
        <Navbar />
        <Dashboard />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
