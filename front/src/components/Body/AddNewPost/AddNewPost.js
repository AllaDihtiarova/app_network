import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';

import { addPost } from '../../../containes/AddNewPostContainer/api/crud'

const AddNewPost = () => {
  
  const crDate = Date.now()
   
  const shema = Yup.object().shape({
    title: Yup.string().required(),
    contentPost: Yup.string().required(),
    createDate: Yup.date().required(),
    userId: Yup.number().required()
  })

  const onPostSubmit = (userId, title, contentPost, createDate) => {
    addPost(userId, title, contentPost, createDate )
  }

    return (
      <>
        <Formik initialValues={{ userId: 7, title: "", contentPost: "", createDate: { crDate } }}
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
                <Button type='submit' variant="contained">Save</Button>
              </Form>
            </>
          }
        </Formik>
    </>
  )
}

export default AddNewPost