import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
import style from './BottomTab.css';

const BottomTab = ({ tabIndex, changeTabIndex }) => (
  <Row>
    <Tabs value={tabIndex} className={style.tabs}>
      <Tab
        icon={<FontIcon className="material-icons">phone</FontIcon>}
        label="A"
        value={0}
        onActive={tab => changeTabIndex(tab.props.value)}
      />
      <Tab
        icon={<FontIcon className="material-icons">favorite</FontIcon>}
        label="FAVORITES"
        value={1}
        onActive={tab => changeTabIndex(tab.props.value)}
      />
      <Tab
        icon={<FontIcon className="material-icons">person_pin</FontIcon>}
        label="NEARBY"
        value={2}
        onActive={tab => changeTabIndex(tab.props.value)}
      />
    </Tabs>
  </Row>
);

BottomTab.propTypes = {
  tabIndex: PropTypes.number,
  changeTabIndex: PropTypes.func,
};

export default BottomTab;
