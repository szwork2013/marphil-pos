import React, {Component} from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import Cart from './../components/Cart';


class CartContainer extends Component {
  render() {
    const { cartitems, } = this.props;
    return (
      <Col md={3} style={{height: '100vh'}}>
        <Cart cartitems={cartitems}/>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartitems: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);