import React from "react";
import { useQuery } from 'react-query'
import { LoadingButton } from '@mui/lab';

import PageHeading from "../../components/PageHeading/PageHeading";
import PostsList from "../../components/Body/PostsList/PostsList";
import { getPost } from "./api/crud";

const PostsListContainer = () => {

  const { isFetching, data } = useQuery('posts', () => getPost())
  const posts = data?.data || []
 
  return (
    <>
      <PageHeading text="Posts" />
      <ul>
        {posts.map((post) => (<li key={post.id}><PostsList title={post.title} content={post.content_post}/> </li>))}
      </ul>
      {isFetching && 
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      }
    </>
  )
}

export default PostsListContainer