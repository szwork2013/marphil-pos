import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import Cart from './../components/Cart';


class CartContainer extends Component {
  static propTypes = {
    cartitems: PropTypes.array
  }

  render() {
    const { cartitems, } = this.props;
    return (
      <Col md={3} style={{ height: '100vh' }}>
        <Cart cartitems={cartitems} />
      </Col>
    );
  }
}

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
