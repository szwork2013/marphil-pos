import React, { Component, PropTypes } from 'react';
import Hammer from 'react-hammerjs';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';
import Popover from 'material-ui/lib/popover/popover';

class CartItem extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
  }

  constructor() {
    super();

    this.state = {
      cursor: 0,
      itemPos: 0,
      isPop: false
    };
  }

  movePress = e => {
    const threshold = 200;
    const cursor = this.state.cursor;
    if (cursor > 0) {
      const deltaX = e.touches[0].clientX;
      console.log(deltaX + ' ' + cursor)
      if (deltaX < cursor) this.setState({ itemPos: deltaX - cursor });
    }
  };

  startPress = e => {
    this.setState({ cursor: e.target.getBoundingClientRect().left });
  };

  endPress = () => {
    this.setState({ cursor: 0, itemPos: 0 });
  };

  render() {
    const { item } = this.props;
    return (
      <Hammer onPress={this.startPress}>
        <Paper
          onTouchMove={this.movePress}
          onTouchEnd={this.endPress}
          style={{ position: 'relative', left: this.state.itemPos }}
        >
          <ListItem
            primaryText={item}
            leftAvatar={<Avatar src="http://i01.i.aliimg.com/img/pb/396/981/254/1277518640484_hz-fileserver3_3891861.jpg" />}
            rightIcon={<FontIcon className="material-icons">loyalty</FontIcon>}
          >
            <Popover
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              open={this.state.isPop}
            >
              <div>
              hello
              </div>
            </Popover>
          </ListItem>
        </Paper>
      </Hammer>
    );
  }
}

export default CartItem;
