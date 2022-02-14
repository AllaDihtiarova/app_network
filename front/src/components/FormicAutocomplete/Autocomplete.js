import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteFormic(props) {
  const [inputValue, setInputValue] = React.useState('all_users');

  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        {...props}
        getOptionLabel={option => option.label}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(props) => <div ref={props.InputProps.ref}><TextField {...props}  label="visible to" /></div>}
      />
    </div>
  );
}