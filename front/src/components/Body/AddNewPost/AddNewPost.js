import * as React from 'react';
import { useQuery } from 'react-query'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';

import { addPost } from '../../../containes/AddNewPostContainer/api/crud'
import { getAllAccess } from '../../../containes/AccessListContainer/api/crud';
import AutocompleteFormic from '../../FormicAutocomplete/Autocomplete';
import UploadImage from '../../UploadImage/UploadImage';

const AddNewPost = () => {
  const { data } = useQuery('posts/access', () => getAllAccess())
  const access = data?.data || []
  const options = access.map((ac) => {
  const option = { value: ac.id, label: ac.access_type }
    return option
  })
  const [value, setValue] = React.useState(options[0]);
  const crDate = Date.now()
  
  const shema = Yup.object().shape({
    title: Yup.string().required(),
    contentPost: Yup.string().required(),
    createDate: Yup.date().required(),
    userId: Yup.number().required(),
    access: Yup.number()
  })

  const onPostSubmit = (data) => {
    addPost({ ...data, accessId: value })
  }

  const changeAccess = (_, newValue) => {
    setValue(newValue.value)
  }

    return (
      <>
        <div>{`value: ${value !== null ? `${value}` : 'null'}`}</div>
        <Formik
          initialValues={{ userId: 7, createDate: crDate, title: '', contentPost: ""}}
          validationSchema={shema}
          onSubmit={onPostSubmit}>
          {({ errors }) =>
            <>
              <div>Errors: {JSON.stringify(errors)}</div>
              <Form>
                <label>
                  User id:
                  <Field component={TextField} type="text" name="userId"></Field>
                </label>
                <label>
                  Create date:
                  <Field component={TextField} type="date" name="createDate"></Field>
                </label>
                <label>
                  Title:
                  <Field component={TextField} type="text" name="title"></Field>
                </label>
                <label>
                  Post content:
                  <Field component={TextField} type="text" name="contentPost"></Field>
                </label>
                  <Field
                    component={AutocompleteFormic}
                    name="access"
                    options={options}
                    onChange={changeAccess}
                  >
                  </Field>
                  <Field component={ UploadImage}/>
                  <Button type='submit' variant="contained">Save</Button>
              </Form>
            </>
          }
        </Formik>
    </>
  )
}

export default AddNewPost