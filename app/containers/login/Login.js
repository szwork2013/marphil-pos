import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';
import { verifyCreds, removeError } from './../../redux/modules/login';

const styles = {
  input: {
    width: '100%',
    ':hover': {
      width: '50%'
    }
  },
  aw: {
    backgroundColor: 'black'
  },
  but: {
    width: '50%',
    color: 'red',
    '@media (max-width: 320px)': {
    }
  },
};

@connect(state => ({ login: state.login }))
@Radium
export default class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    login: PropTypes.object.isRequired,
  }

  constructor() {
    super();

    this.state = {
      focus: 'terminal'
    };
  }

  handleChange = tab => {
    const { terminalEmail, dashboardEmail } = this.refs;
    const removeErr = bindActionCreators(removeError, this.props.dispatch);

    removeErr();

    if (tab === 'terminal') setTimeout(() => terminalEmail.focus(), 300);
    else setTimeout(() => dashboardEmail.focus(), 300);

    this.setState({
      focus: tab
    });
  }

  verifyUser(role) {
    const verify = bindActionCreators(verifyCreds, this.props.dispatch);
    const { dashboardEmail, dashboardPassword
            , terminalEmail, terminalPassword } = this.refs;

    if (role === 'admin') verify(dashboardEmail.getValue(), dashboardPassword.getValue(), role);
    else verify(terminalEmail.getValue(), terminalPassword.getValue(), role);
  }

  render() {
    const { focus } = this.state;
    const { login } = this.props;
    return (
      <div className={`container`}>
        <Paper zDepth={2}>
          <Tabs
            value={focus}
            onChange={this.handleChange}
          >
            <Tab
              label="Terminal"
              value="terminal"
              icon={<FontIcon className="material-icons">desktop_windows</FontIcon>}
            >
              <form>
                <TextField
                  type="Email"
                  floatingLabelText="Email"
                  errorText={login.error.code === 'INVALID_USER' ||
                            login.error.code === 'INVALID_EMAIL'
                            ? login.error.msg : false}
                  ref="terminalEmail"
                  onChange={e => e.stopPropagation()}
                  autoFocus
                />
                <button style={[styles.but, styles.aw]}>aw</button>
                <br />
                <TextField
                  type="password"
                  floatingLabelText="Password"
                  errorText={login.error.code === 'INVALID_PASSWORD'
                            ? login.error.msg : false}
                  ref="terminalPassword"
                  onChange={e => e.stopPropagation()}
                />
                <br />
                <RaisedButton
                  type="submit"
                  label="Login"
                  style={{ width: '100%', marginTop: '20px' }}
                  onClick={() => this.verifyUser('terminal')}
                  secondary
                />
              </form>
            </Tab>
            <Tab
              label="Dashboard"
              value="dashboard"
              icon={<FontIcon className="material-icons">dashboard</FontIcon>}
            >
              <form>
                <TextField
                  type="email"
                  floatingLabelText="Email"
                  errorText={login.error.code === 'INVALID_USER' ||
                            login.error.code === 'INVALID_EMAIL'
                            ? login.error.msg : false}
                  ref="dashboardEmail"
                  onChange={e => e.stopPropagation()}
                />
                <br />
                <TextField
                  type="password"
                  floatingLabelText="Password"
                  errorText={login.error.code === 'INVALID_PASSWORD'
                            ? login.error.msg : false}
                  ref="dashboardPassword"
                  onChange={e => e.stopPropagation()}
                />
                <br />
                <RaisedButton
                  type="submit"
                  label="Login"
                  style={{ width: '100%', marginTop: '20px' }}
                  onClick={() => this.verifyUser('admin')}
                  secondary
                />
              </form>
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

