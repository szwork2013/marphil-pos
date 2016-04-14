import React from 'react';
import { List, ListItem, Subheader,
         Avatar, Divider, FontIcon,
         Card, CardHeader, CardText,
         Popover } from 'material-ui';

const Cart = ({ cartitems }) => {
  function handleSwipe()  {
    console.log(this);
  }
  
  return (
    <List>
      <CardHeader 
        title="Cart"
        subtitle={<b>swipe to delete </b>}
      />
      {
        cartitems.map(i => <CartItem handleSwipe={handleSwipe} cartitem={i.item} key={i.id}/>)
      }
    </List>
  );
}

const CartItem = ({ cartitem, handleSwipe }) => (
  <ListItem
    primaryText={cartitem}
    leftAvatar={<Avatar src="http://i01.i.aliimg.com/img/pb/396/981/254/1277518640484_hz-fileserver3_3891861.jpg"/>}
    rightIcon={<FontIcon className="material-icons">loyalty</FontIcon>}
    onTouchMove={handleSwipe}
   >
    <Popover
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <div>
      hello
      </div>
    </Popover>
  </ListItem>
);

export default Cart;