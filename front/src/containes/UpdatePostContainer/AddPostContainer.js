import { useParams } from "react-router-dom"
import { useQuery } from "react-query"

import PageHeading from "../../components/PageHeading/PageHeading";
import UpdatePost from "../../components/Body/UpdatePost/UpdatePost";
import { getPosts } from "../UpdatePostContainer/api/crud";

const UpdatePostContainer = () => {
  const { postId } = useParams()
  const { data } = useQuery(`posts/${postId}`, () => getPosts(postId))
  const post = data?.data || {}
  const postData = {
    name: post
  }
  
  return (
    <>
      <PageHeading text="Update post" />
      <UpdatePost postData={postData.name}/>
    </>
  )
}

export default UpdatePostContainer