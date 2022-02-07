import { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom"
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types'

import { updateUserById } from '../../../containes/UserContainer/api/crud';

const User = ({ firstName, lastName, birthday, createDate, gender, userData }) => {

  const [fName, setFirstName] = useState(userData)
  const { userId } = useParams()
 
  const shema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birthday: Yup.date()
  })

  const onFormSubmit = (data) => {
    setFirstName(data)
    updateUserById(userId, data)
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
                <label >First name: 
                  <Field component={TextField} type="text" name="first_name" />
                </label>
                <label>Last name: 
                  <Field component={TextField} type="text" name="last_name" />
                </label>  
                <label>Birthday: 
                  <Field component={TextField} type="date" name="birthday" />
                </label>
                <Button type="submit" variant="contained" color="success">Save</Button>
              </Form>
            </>
          }
          
        </Formik>
    </>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    birthday: PropTypes.string
  }) 
}

export default User