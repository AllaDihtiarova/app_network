import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types';

import { updateUserById } from '../../../containes/UserContainer/api/crud';
import AutocompleteFormic from '../../FormicAutocomplete/Autocomplete';
import { getAllAccess } from '../../../containes/AccessListContainer/api/crud';
import UploadImage from '../../UploadImage/UploadImage';
import authContext from '../../../authContext';
import BasicModal from '../../Modal/Modal';

const User = ({ userData }) => {
  const {firstName, lastName, birthday, createDate, gender} = useContext(authContext)
  
  const { userId } = useParams()

  const { data } = useQuery('posts/access', () => getAllAccess())
  const access = data?.data || []

  const options = access.map((ac) => {
  const option = { value: ac.id, label: ac.access_type }
    return option
  })
  const [value, setValue] = useState(options[0]);

  const [fName, setFirstName] = useState(userData)
 
  const shema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birthday: Yup.date()
  })

  const onFormSubmit = (data) => {
    setFirstName(data)
    updateUserById(userId, { ...data, id_access_type: value })
  }

  const changeAccess = (_, newValue) => {
    setValue(newValue.value)
  }

   return (
    <>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Birthday: {birthday}</p>
      <p>Create Date: {createDate}</p>
      <p>Gender: {gender}</p>

      <Formik initialValues={fName}
        validationSchema={shema}
        onSubmit={onFormSubmit}
      >
        {({ errors }) => 
          <>
            <div>Errors: {JSON.stringify(errors)}</div>
              <Form>
                <Field component={UploadImage} />
                <BasicModal body={ 
                  <div>
                    <label >First name: 
                      <Field component={TextField} type="text" name="first_name" />
                    </label>
                    <label>Last name: 
                      <Field component={TextField} type="text" name="last_name" />
                    </label>  
                    <label>Birthday: 
                      <Field component={TextField} type="date" name="birthday" />
                    </label>
                    <Field
                      component={AutocompleteFormic}
                      name="access"
                      options={options}
                      onChange={changeAccess}
                    >
                    </Field>
                  </div>
                }></BasicModal>
                <Button type="submit" variant="contained" color="success">Save</Button>
              </Form>
            </>
          } 
        </Formik>
    </>
  )
}

User.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthday: PropTypes.func
  })
}

export default User
