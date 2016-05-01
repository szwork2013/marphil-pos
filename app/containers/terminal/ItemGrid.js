import React, { PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ItemTile from './ItemTile';
import style from './ItemGrid.css';

const ItemGrid = ({ items, addCartItem }) => (
  <div>
    <GridList cols={4} className={style.gridlist}>
      {items.map((itm, idx) => <ItemTile addCartItem={addCartItem} item={itm.name} key={idx} />)}
    </GridList>
  </div>
);

ItemGrid.propTypes = {
  items: PropTypes.array,
  addCartItem: PropTypes.func,
};

export default ItemGrid;
