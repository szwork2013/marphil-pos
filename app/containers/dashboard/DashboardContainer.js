import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';


class DashboardContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    actions: PropTypes.array.isRequired,
    ui: PropTypes.object.isRequired,
  }

  render() {
    const { children, ui, actions } = this.props;
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-12">
          <AppBar
            title="Title"
            onLeftIconButtonTouchTap={actions.handleNav}
          />
          <LeftNav containerStyle={{ top: '64px' }}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <Link to="/">login</Link>
          </LeftNav>
        </div>
        <div className="col-md-12">
          {children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {  } = state;
  return {
    
  };
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({}, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
