import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types'

const UserForm = ({userData}) => {

  const shema = Yup.object().shape({
    login: Yup.string().required(),
    email: Yup.string().email("Email must be a valid email").required(),
    password: Yup.number().typeError("Must be a number").required()
  })

  const onFormSubmit = (data) => {
    console.log(data)
  }

console.log(userData)

    return (
    <>
        <Formik initialValues={userData}
          validationSchema={shema}
          onSubmit={onFormSubmit}
        >
          {({ errors }) => 
            <>
              <div>Errors: {JSON.stringify(errors)}</div>
              <Form>
                <label >Login: 
                  <Field component={TextField} type="text" name="login" />
                </label>
                <label>Email: 
                  <Field component={TextField} type="email" name="email" />
                </label>  
                <label>Password: 
                  <Field component={TextField} type="text" name="password" />
                </label>
                <Button type="submit" variant="contained" color="success">Save</Button>
              </Form>
            </>
          }
          
        </Formik>
    </>
  )
}

UserForm.propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
}

export default UserForm