import React from 'react';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyCheckbox, FormsyText, FormsyTime } from 'formsy-material-ui/lib';

const Main = React.createClass({
  getInitialState() {
    return {
      canSubmit: false,
    };
  },

  errorMessages: {
    wordsError: "Please only use letters"
  },

  styles: {
    paperStyle: {
      width: 400,
      margin: 'auto',
      padding: 20,
      marginTop: 20
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
    this.props.onFormSubmit(data);
    this.props.onSubmit();
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  render() {
    let {paperStyle, submitStyle } = this.styles;
    let { wordsError } = this.errorMessages;

    return (

          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
            style={paperStyle}
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

    );
  },
});

export default Main;
