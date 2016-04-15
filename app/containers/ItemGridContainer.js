import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Row, Col } from 'react-bootstrap';
import { LeftNav, Paper } from 'material-ui';
import { getInitialItems } from './../actions/item';
import { addCartItem } from './../actions/cart';
import { handleNav, changeTabIndex } from './../actions/navigation';
import ItemGrid from './../components/ItemGrid';
import BottomTab from './../components/BottomTab';

class ItemGridContainer extends Component {
  static propTypes = {
    items: PropTypes.array,
    tabindex: PropTypes.number,
    leftnav: PropTypes.bool,
    handleNav: PropTypes.func,
    changeTabIndex: PropTypes.func,
    addCartItem: PropTypes.func,
    getInitialItems: PropTypes.func,
  }

  componentWillMount() {
    this.props.getInitialItems();
  }

  render() {
    const { items, tabindex, leftnav, } = this.props;
    const { handleNav, changeTabIndex, addCartItem, } = this.props;
    return (
      <Col md={9} style={{ height: '100vh' }}>
        <Paper zDepth={2} style={{ padding: '10px' }}>
          <SwipeableViews index={tabindex} resistance onChangeIndex={changeTabIndex} >
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
          <BottomTab tabindex={tabindex} changeTabIndex={changeTabIndex} />
        <LeftNav
          docked={false}
          width={200}
          open={leftnav}
          onRequestChange={handleNav}
        />
      </Col>
    );
  }
}

const mapStateToProps = state => (
  {
    items: state.items,
    leftnav: state.navigation.leftnav,
    tabindex: state.navigation.tabindex
  }
);

const mapDispatchToProps = dispatch => (
  {
    getInitialItems: bindActionCreators(getInitialItems, dispatch),
    handleNav: bindActionCreators(handleNav, dispatch),
    changeTabIndex: bindActionCreators(changeTabIndex, dispatch),
    addCartItem: bindActionCreators(addCartItem, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemGridContainer);
