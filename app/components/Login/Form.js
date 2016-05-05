import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  form: {
    padding: '20px'
  },
  textfield: {
    width: '100%'
  },
  submit: {
    width: '100%'
  }
};

@reduxForm({
  form: 'login',
  fields: [
    'email',
    'password',
  ]
})
export default class Form extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.object.isRequired,
    verifyCreds: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailInput = e => {
    e.stopPropagation();
    this.setState({ email: e.target.value });
  }

  handlePasswordInput = e => {
    e.stopPropagation();
    this.setState({ password: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.verifyCreds(email, password, e.target.name);
  }

  render() {
    const { fields: { email, password }, resetForm, label } = this.props;

    return (
      <form
        name={label}
        style={styles.form}
        onSubmit={this.handleSubmit}
      >
        <TextField
          type="email"
          ref={`${label}Email`}
          floatingLabelText="Email"
          style={styles.textfield}
          {...email}
          autoFocus
          required
        />
        <br />
        <TextField
          type="password"
          ref={`${label}Password`}
          floatingLabelText="Password"
          style={styles.textfield}
          {...password}
          required
        />
        <br />
        <RaisedButton
          type="submit"
          label="Login"
          style={styles.submit}
          secondary
        />
      </form>
    );
  }
}
