import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';

export default class DashboardLayout extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Link to="inventory">inventory</Link>
          <br />
          <Link to="/">login</Link>
        </div>
        <div className="col-md-10">
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}
