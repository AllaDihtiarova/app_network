import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types';

import AutocompleteFormic from '../../FormicAutocomplete/Autocomplete';
import { updatePostById } from '../../../containes/UpdatePostContainer/api/crud';
import { getAllAccess } from '../../../containes/AccessListContainer/api/crud';
import UploadImage from '../../UploadImage/UploadImage';
import BasicModal from '../../Modal/Modal';

const UpdatePost = ({ postData}) => {
  const { data } = useQuery('posts/access', () => getAllAccess())
  const access = data?.data || []
  const options = access.map((ac) => {
  const option = { value: ac.id, label: ac.access_type }
    return option
  })
  
  const [value, setValue] = useState(options[0]);
  const [newPost, setNewPost] = useState(postData)
  const { postId } = useParams()

  const shema = Yup.object().shape({
    title: Yup.string().required(),
    content_post: Yup.string().required()
  })

  const onPostSubmit = (data) => {
    setNewPost(data)
    updatePostById(postId, { ...data, access_type_id: value })
  };

  const changeAccess = (_, newValue) => {
    setValue(newValue.value)
  };

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
              <Field component={UploadImage} />
              <BasicModal body={
                <div>
                    <label >Title: 
                      <Field component={TextField} type="text" name="title" />
                    </label>
                    <label>
                      Content:
                      <Field component={TextField} type="text" name="content_post" />
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
