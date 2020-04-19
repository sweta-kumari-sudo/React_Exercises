
import React, { useState, Fragment } from 'react';

import {
  EuiComboBox,
  EuiFormRow,
  EuiSpacer,
} from '@elastic/eui';

const options = [
  {
    label: 'Sweta',
    'data-test-subj': 'titanOption',
  },
]
export default () => {
  const [selectedOptions, setSelected] = useState();
  
  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        option => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      options.push(newOption);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  const comboBox = (
    <EuiComboBox
      placeholder="Select or create options"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
    />
  );
  return (
    <Fragment>
      <EuiFormRow
        label="Combo box"
        helpText="This combo box is inside of a form row">
        {comboBox}
      </EuiFormRow>

      <EuiSpacer />

     
    </Fragment>
  );
};

