import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Navbar />
        <Dashboard />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
