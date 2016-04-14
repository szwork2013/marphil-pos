import React, {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import { Row } from 'react-bootstrap';
import { GridList, GridTile, CircularProgress  } from 'material-ui';
import style from './ItemGrid.css';

const ItemGrid = ({ items, addCartItem }) => (
  <div>
    <GridList cols={4} className={style.gridlist}>
    {
      items.map(i => <Item addCartItem={addCartItem} item={i.name} key={i.id}/>)
    }
    {
      items.map(i => <Item addCartItem={addCartItem} item={i.name} id={i.id} key={i.id}/>)
    }
    </GridList>
  </div>
);

const Item = ({ item, id, addCartItem }) => (
  <GridTile 
    onClick={() => addCartItem(item, id)}
    title={item}
    subtitle={<span>Ito ay <b>{item}</b> </span>}
    className={style.gridtile}
  >
  <LazyLoad>
    <img className="itemImg" width="100%"src="http://placehold.it/100x70" />
  </LazyLoad>
  </GridTile>
);

export default ItemGrid;