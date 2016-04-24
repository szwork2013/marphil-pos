import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

const AddItem = props => (
  <div>
    <TextField
      hintText="Hint Text"
    />
  </div>
);

AddItem.propTypes = {

};

export default AddItem;
