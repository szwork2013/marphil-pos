import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainInterface from './MainInterface';

class AdminDashboard extends Component {
  render() {
    return (
      <Grid fluid style={{ padding: 0 }}>
        <Sidebar />
        <MainInterface />
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.navigation.isNavOpen
  };
}

export default connect(mapStateToProps)(AdminDashboard);
