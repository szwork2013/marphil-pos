import React, {Component} from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindActionCreators } from 'redux';
import Firebase from 'firebase';
import { Row, Col } from 'react-bootstrap';
import { LeftNav, Paper } from 'material-ui';
import { getInitialData } from './../actions/item';
import { addCartItem } from './../actions/cart';
import { handleNav, changeTabIndex } from './../actions/navigation';
import ItemGrid from './../components/ItemGrid';
import BottomTab from './../components/BottomTab';

class ItemGridContainer extends Component {
  componentWillMount() {
    var ref = new Firebase('https://vivid-torch-4276.firebaseio.com/items');
    
    ref.once("value", data => {
      var initObj = data.val()
        , init = Object.keys(initObj).map(key => {
           initObj[key].id = key;
           return initObj[key];
        });
        
      this.props.getInitialData(init);
    });     
  }
  
  render() {
    const { items, tabindex, leftnav, } = this.props;
    const { handleNav, changeTabIndex, addCartItem, } = this.props;
    return (
      <Col md={9} style={{ height: '100vh' }}>
        <Paper zDepth={2} style={{ padding: '10px' }}>
          <SwipeableViews index={tabindex} resistance={true} onChangeIndex={changeTabIndex} >
            <div>
              <ItemGrid items={items} addCartItem={addCartItem}/>
            </div>
            <div>
              <ItemGrid items={items} addCartItem={addCartItem}/>
            </div>
            <div>
              <ItemGrid items={items} addCartItem={addCartItem}/>
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

const mapStateToProps = state => {
  return {
    items: state.items,
    leftnav: state.navigation.leftnav,
    tabindex: state.navigation.tabindex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialData: bindActionCreators(getInitialData, dispatch),
    handleNav: bindActionCreators(handleNav, dispatch),
    changeTabIndex: bindActionCreators(changeTabIndex, dispatch),
    addCartItem: bindActionCreators(addCartItem, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemGridContainer);