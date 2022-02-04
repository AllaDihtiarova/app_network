import { useState } from 'react';
import { useParams } from "react-router-dom"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types'

import { updatePostById } from '../../../containes/UpdatePostContainer/api/crud';

const UpdatePost = ({ postData }) => {
  const [newPost, setNewPost] = useState(postData)
  const { postId } = useParams()

  const shema = Yup.object().shape({
    title: Yup.string().required(),
    content_post: Yup.string().required()
  })

  const onPostSubmit = (data) => {
    setNewPost(data)
    updatePostById(postId, data)
  }

    return (
    <>
        <Formik initialValues={newPost}
          validationSchema={shema}
          onSubmit={onPostSubmit}
        >
          {({ errors }) => 
            <>
              <div>Errors: {JSON.stringify(errors)}</div>
              <Form>
                <label >Title: 
                  <Field component={TextField} type="text" name="title" />
                </label>
                <label>
                  Content:
                  <Field component={TextField} type="text" name="content_post" />
                </label>
                <Button type='submit' variant="contained">Save</Button>
              </Form>
            </>
          }
          
        </Formik>
    </>
  )
}

UpdatePost.propTypes = {
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content_post: PropTypes.string.isRequired
  })
}

export default UpdatePost
