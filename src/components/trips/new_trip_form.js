import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const Main = React.createClass({
  getInitialState() {
    return {
      canSubmit: false,
    };
  },

  errorMessages: {
    wordsError: "Please only use letters",
    emailError: "Please provide a valid email",
    urlError: "Please provide a valid URL",
  },

  styles: {
    paperStyle: {
      width: 400,
      margin: 'auto',
      padding: 10
    },
    switchStyle: {
      marginBottom: 10,
    },
    submitStyle: {
      marginTop: 12,
    },
  },

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  render() {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, emailError, urlError } = this.errorMessages;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              hintText="Name your trip (optional)"
              floatingLabelText="Name"
            />
            <FormsyTime
              name="departure"
              required
              floatingLabelText="Departure Time"
            />
            <FormsyTime
              name="arrival"
              required
              floatingLabelText="Arrival Time"
            />
            <FormsyCheckbox
              name="mon"
              label="M"
            />
            <FormsyCheckbox
              name="tue"
              label="T"
            />
            <FormsyCheckbox
              name="wed"
              label="W"
            />
            <FormsyCheckbox
              name="thur"
              label="Th"
            />
            <FormsyCheckbox
              name="fri"
              label="F"
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  },
});

export default Main;
