import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { fieldToTextField } from 'formik-mui';

const FormikAutocomplete = (props) => {
    console.log(props)
    const { form: { setTouched, setFieldValue } } = props;
    const { error, helperText, ...field } = fieldToTextField(props);
    const { name} = field;

    return (
        <Autocomplete
            {...props}
            {...field}
            getOptionLabel={option => option.label}
            // inputValue="all_users"
            onChange={ (_, value) => setFieldValue(name, value) }
            onBlur={() => setTouched({ [name]: true })}
            // onInputChange={() => getFieldProps()}
            // onSelect=
            renderInput={ props =>
                <TextField {...props} helperText={helperText} error={error} />
            }
        />
    );
}

export default FormikAutocomplete;