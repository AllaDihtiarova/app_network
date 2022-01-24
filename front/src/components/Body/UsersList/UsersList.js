import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UsersList = ({firstName, lastName, id}) => {
   
  return (
    <Link to={`/users/${id}`}>
      <h2>First name: {firstName} Last name:{lastName}</h2>
      <p>Id: {id}</p>
    </Link>
  )
}

UsersList.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default UsersList