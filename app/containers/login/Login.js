import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Snackbar from 'material-ui/lib/snackbar';
import Paper from 'material-ui/lib/paper';
import FontIcon from 'material-ui/lib/font-icon';
import styles from './Login.css';
import { verifyCreds } from './../../redux/modules/login';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      focus: 'terminal'
    };
  }

  handleChange = tab => {
    const { terminalEmail, dashboardEmail } = this.refs;

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
      <div className={`${styles.login} container`}>
        <Paper zDepth={2}>
          <Tabs
            value={focus}
            contentContainerClassName={styles.content}
            onChange={this.handleChange}
          >
            <Tab
              label="Terminal"
              value="terminal"
              icon={<FontIcon className="material-icons">desktop_windows</FontIcon>}
            >
              <TextField
                type="Email"
                hintText="Email"
                ref="terminalEmail"
                onChange={e => e.stopPropagation()}
                className={styles.inputs}
                autoFocus
              />
              <br />
              <TextField
                type="password"
                hintText="Password"
                ref="terminalPassword"
                onChange={e => e.stopPropagation()}
                className={styles.inputs}
              />
              <br />
              <RaisedButton
                label="Login"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => this.verifyUser('terminal')}
                secondary
              />
            </Tab>
            <Tab
              label="Dashboard"
              value="dashboard"
              icon={<FontIcon className="material-icons">dashboard</FontIcon>}
            >
              <TextField
                type="email"
                hintText="Email"
                ref="dashboardEmail"
                onChange={e => e.stopPropagation()}
                className={styles.inputs}
              />
              <br />
              <TextField
                type="password"
                hintText="Password"
                ref="dashboardPassword"
                onChange={e => e.stopPropagation()}
                className={styles.inputs}
              />
              <br />
              <RaisedButton
                label="Login"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => this.verifyUser('admin')}
                secondary
              />
            </Tab>
          </Tabs>
        </Paper>
        <Snackbar
          open={login.error || false}
          message={login.error}
        />
      </div>
    );
  }
}

export default connect(state => ({ login: state.login }))(Login);
