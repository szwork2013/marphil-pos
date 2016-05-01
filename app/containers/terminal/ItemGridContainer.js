import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/lib/paper';
import LeftNav from 'material-ui/lib/left-nav';
import ItemGrid from './../../components/terminal/ItemGrid';
import BottomTab from './../../components/terminal/BottomTab';
import * as NavActions from './../../actions/navigation';
import * as ItemActions from './../../actions/items';
import { addCartItem } from './../../actions/cart';

class ItemGridContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    tabIndex: PropTypes.number.isRequired,
    isNavOpen: PropTypes.bool,
  }

  componentWillMount() {
    const { listenToFirebase } = this.props.actions;
    listenToFirebase();
  }

  render() {
    const { items, tabIndex, isNavOpen, actions: {
       changeTabIndex, addCartItem, handleNav } } = this.props;
    return (
      <Col md={9} style={{ height: '100vh' }}>
        <Paper zDepth={2} style={{ padding: '10px' }}>
          <SwipeableViews
            index={tabIndex}
            onChangeIndex={changeTabIndex}
            slideStyle={{ marginRight: '10px' }}
            resistance
          >
            <div>
              <ItemGrid items={items} addCartItem={addCartItem} />
            </div>
            <div>
              <ItemGrid items={items} addCartItem={addCartItem} />
            </div>
            <div>
              <ItemGrid items={items} addCartItem={addCartItem} />
            </div>
          </SwipeableViews>
         </Paper>
        <BottomTab tabIndex={tabIndex} changeTabIndex={changeTabIndex} />
        <LeftNav
          docked={false}
          width={200}
          open={isNavOpen}
          onRequestChange={handleNav}
        >
         <Link to="/">button</Link>
         </LeftNav>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { items, navigation: { isNavOpen, tabIndex } } = state;

  return {
    items,
    isNavOpen,
    tabIndex
  };
}

const actions = Object.assign({}, ItemActions, NavActions, { addCartItem });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(ItemGridContainer);
