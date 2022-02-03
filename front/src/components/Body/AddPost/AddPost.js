import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types'

const AddPost = ({postData}) => {

  const shema = Yup.object().shape({
    title: Yup.string().required(),
    content_post: Yup.string().required()
  })

  const onPostSubmit = (data) => {
    console.log(data)
  }

console.log(postData)

    return (
    <>
        <Formik initialValues={postData}
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

AddPost.propTypes = {
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content_post: PropTypes.string.isRequired
  })
}

export default AddPost
