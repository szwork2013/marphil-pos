import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import ItemGridContainer from './ItemGridContainer';
import CartContainer from './CartContainer';


class CashierTerminal extends Component {
  render() {
    return (
      <Grid fluid={true} style={{ padding: 0 }}>
        <ItemGridContainer />
        <CartContainer />
      </Grid>
    );
  }
}

export default CashierTerminal;