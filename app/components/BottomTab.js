import React from 'react';
import { Row } from 'react-bootstrap';
import { Tabs, Tab, FontIcon } from 'material-ui';
import style from './BottomTab.css';

const BottomTab = ({ tabindex, changeTabIndex }) => (
  <Row>
    <Tabs value={tabindex} className={style.tabs}>
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

export default BottomTab;