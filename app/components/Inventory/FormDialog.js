import React, { Component, PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  addButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
};

class AddNewItem extends Component {
  static propTypes = {

  }

  constructor() {
    super();

    this.state = {
      openDialog: false,
      select: 1,
    };
  }

  handleDialogState = () => {
    this.setState({ openDialog: !this.state.openDialog });
  }

  handleSelectField = (event, index, value) => {
    this.setState({ select: value });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleDialogState}
      />,
      <FlatButton
        type="submit"
        label="Submit"
        primary
      />,
    ];

    return (
      <div>
        <FloatingActionButton onTouchTap={this.handleDialogState} style={styles.addButton}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add Item"
          actions={actions}
          open={this.state.openDialog}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText="Item ID"
            />
            <br />
            <TextField
              hintText="Item Name"
            />
            <br />
            <TextField
              hintText="Category"
            />
            <br />
            <SelectField value={this.state.select} onChange={this.handleSelectField}>
              <MenuItem value={1} primaryText="Pako" />
              <MenuItem value={2} primaryText="Paint" />
              <MenuItem value={3} primaryText="tiles" />
              <MenuItem value={4} primaryText="wat" />
              <MenuItem value={5} primaryText="wet" />
            </SelectField>
            <br />
            <TextField
              hintText="Description"
            />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default AddNewItem;
