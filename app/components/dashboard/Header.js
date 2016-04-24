import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import AppBar from 'material-ui/lib/app-bar';
import styles from './Header.css';

const Header = () => (
  <Col md={9} className={styles.col}>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </Col>
);

Header.propTypes = {
    
};

export default Header;
