import PropTypes from 'prop-types'

const User = ({ firstName, lastName, birthday, createDate, gender }) => {
  return (
    <>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Birthday: {birthday}</p>
      <p>Create Date: {createDate}</p>
      <p>Gender: {gender}</p>
    </>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
}

export default User