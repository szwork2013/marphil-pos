import React, { Component, PropTypes } from 'react';

import FormDialog from './FormDialog';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table/table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow from 'material-ui/Table/TableRow';
import TableHeader from 'material-ui/Table/TableHeader';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableBody from 'material-ui/Table/TableBody';


const styles = {
  addButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
};

export default class Inventory extends Component {
  static propTypes = {

  }


 

  render() {
    return (
      <Paper zDepth={1}>
        <Table
          height="500px"
          selectable
          multiSelectable
          onRowSelection
          fixedHeader
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn
                colSpan="6"
                tooltip="Super Header"
                style={{ textAlign: 'center', fontSize: '25px' }}
              >
                All
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Item</TableHeaderColumn>
              <TableHeaderColumn>Category</TableHeaderColumn>
              <TableHeaderColumn>Brand</TableHeaderColumn>
              <TableHeaderColumn>Supplier</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Pako</TableRowColumn>
              <TableRowColumn>Pako</TableRowColumn>
              <TableRowColumn>Pako</TableRowColumn>
              <TableRowColumn>Pako</TableRowColumn>
              <TableRowColumn>Pako</TableRowColumn>
              <TableRowColumn>Pako</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <FormDialog />
      </Paper>
    );
  }
}
