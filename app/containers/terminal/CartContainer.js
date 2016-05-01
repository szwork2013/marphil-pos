import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CartSummary from './../../components/terminal/CartSummary';
import CartItem from './../../components/terminal/CartItem';
import * as CartActions from './../../actions/cart.js';

class CartContainer extends Component {
  static propTypes = {
    cart: PropTypes.array
  }

  render() {
    const { cart } = this.props;
    return (
      <Col md={3} style={{ height: '100vh' }}>
        <CartSummary>
          {cart.map((itm, idx) => <CartItem item={itm.item} key={idx} />)}
        </CartSummary>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const actions = Object.assign({}, CartActions);
const mapDispatchToProps = dispatch => ({ acts: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
