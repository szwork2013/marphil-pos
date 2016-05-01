import React, { Component } from 'react';
import { Link } from 'react-router';
import Cart from './Cart';

class TerminalContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container-fluid">
        <div className="col-md-9">
          {children}
          <Link to="/">back</Link>
        </div>
        <div className="col-md-3">
          <Cart />
        </div>
      </div>
    );
  }
}

export default TerminalContainer;
