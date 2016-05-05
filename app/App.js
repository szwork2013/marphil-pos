import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
