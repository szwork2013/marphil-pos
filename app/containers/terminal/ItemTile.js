import React, { PropTypes } from 'react';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

const Item = ({ item, addCartItem }) => (
  <GridTile
    onClick={() => addCartItem(item)}
    title={item}
    subtitle={<span>Ito ay <b>{item}</b> </span>}
  >
  <img className="itemImg" width="100%"src="http://placehold.it/100x70" />
  </GridTile>
);

Item.propTypes = {
  item: PropTypes.string,
  addCartItem: PropTypes.func
};

export default Item;
