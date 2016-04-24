import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Firebase from 'firebase';
import { Col } from 'react-bootstrap';
import TextField from 'material-ui/lib/text-field';
import * as ItemActions from './../../actions/item';

class MainInterface extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  addNewItem = () => {
    const { addItem } = this.props.actions;
    const { name, category, description, price, quantity } = this.refs;
    const itemObj = {
      name: name.getValue(),
      category: category.getValue(),
      description: description.getValue(),
      price: price.getValue(),
      quantity: quantity.getValue(),
      timestamp: Firebase.ServerValue.TIMESTAMP
    };
    addItem(itemObj);
  };

  render() {
    return (
      <Col md={9}>
        <TextField
          ref="name"
          hintText="Item Name"
          fullWidth
        />
        <TextField
          ref="category"
          hintText="Category"
          fullWidth
        />
        <TextField
          ref="description"
          hintText="Description"
          rows={1}
          multiLine
          fullWidth
        />
        <TextField
          ref="price"
          hintText="Price"
        />
        <TextField
          ref="quantity"
          hintText="Quantity"
          type="number"
        />
        <button onClick={this.addNewItem}> okay </button>
        <Link to="terminal">aw</Link>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { } = state;

  return {

  };
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(ItemActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(MainInterface);
