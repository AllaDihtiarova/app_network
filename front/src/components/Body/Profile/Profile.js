import { useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Profile = ({firstName, lastName, id}) => {
  // let params = useParams()
  // const { title } = params
 
  return (
    <Link to={`/users/${id}`}>
      <h2>First name: {firstName} Last name:{lastName}</h2>
      <p>Id: {id}</p>
      {/* {/^[A-Z]+\D\w+$/.test(title) && <h2>Profile: {title}</h2>} */}
    </Link>
  )
}

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Profile