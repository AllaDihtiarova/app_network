import { useParams } from "react-router-dom"
import { useQuery } from "react-query"

import PageHeading from "../../components/PageHeading/PageHeading";
import AddPost from "../../components/Body/AddPost/AddPost"
import { getPosts } from "../AddPostContainer/api/crud";

const AddPostContainer = () => {
  const { postId } = useParams()
  const { data } = useQuery(`posts/${postId}`, () => getPosts(postId))
  const post = data?.data || []
  const postData = {
    name: post[0]
  }

  console.log(post)
  
  return (
    <>
      <PageHeading text="Add post" />
      <ul>
        {post.map((p) => (<li key={ p.id}><AddPost postData={postData.name}/></li>))}
      </ul>
    </>
  )
}

export default AddPostContainer