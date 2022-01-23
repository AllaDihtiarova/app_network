import React from "react";
import {useQuery} from 'react-query'

import PageHeading from "../../components/PageHeading/PageHeading";
import Articles from '../../components/Body/Articles/Articles'
import { getPost } from "../api/crud";

const PostsContainer = () => {

  const { isFetching, data } = useQuery('posts', () => getPost())
  const posts = data?.data || []
 
  return (
    <>
      <PageHeading text="Posts" />
      <ul>
        {posts.map((post) => (<li key={post.id}><Articles title={post.title} content={post.content_post}/> </li>))}
      </ul>
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default PostsContainer