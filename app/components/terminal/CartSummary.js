import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import CardHeader from 'material-ui/lib/card/card-header';

const CartSummary = ({ children }) => (
  <List>
    <CardHeader
      title="Cart"
      subtitle={<b>swipe to delete </b>}
    />
    {children}
  </List>
);

CartSummary.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartSummary;
