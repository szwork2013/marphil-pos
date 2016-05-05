import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Form from './Form';
import Tabs from 'material-ui/Tabs/tabs';
import Tab from 'material-ui/Tabs/tab';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '500px',
  }
};

@Radium
export default class Login extends Component {
  static propTypes = {
    actions: PropTypes.object,
    login: PropTypes.object.isRequired,
  }

  constructor() {
    super();

    this.state = { focus: 'terminal' };
  }

  handleChange = tab => {
    if (typeof tab !== 'string') return;

    const { actions: { removeError } } = this.props;

    removeError();
    // if (tab === 'terminal') setTimeout(() => terminalEmail.focus(), 300);
    // else setTimeout(() => dashboardEmail.focus(), 300);

    this.setState({ focus: tab });
  }

  verifyCreds = (email, password, path) => {
    this.props.actions.verifyCreds(email, password, path);
  }

  render() {
    const { login: { error } } = this.props;
    return (
      <div className="container" style={styles.container}>
        <Paper zDepth={2}>
          <Tabs
            value={this.state.focus}
            onChange={this.handleChange}
            style={styles.content}
          >
            <Tab
              label="Terminal"
              value="terminal"
              icon={<FontIcon className="material-icons">desktop_windows</FontIcon>}
            >
              <Form label="terminal" error={error} verifyCreds={this.verifyCreds} />
            </Tab>
            <Tab
              label="Dashboard"
              value="dashboard"
              icon={<FontIcon className="material-icons">dashboard</FontIcon>}
            >
              <Form label="dashboard" error={error} verifyCreds={this.verifyCreds} />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

