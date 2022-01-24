import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostsList = ({ title, content }) => {
  let params = useParams()
  const { id } = params

  return (
    <>
      <h2>Title of rost: {title}</h2>
      <p>Content of post: {content}</p>
      {!isNaN(id) && <h2>Post: {id}</h2>}
    </>
  )
}

PostsList.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default PostsList