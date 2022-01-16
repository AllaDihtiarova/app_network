import PropTypes from 'prop-types'

import Friend from "./friend"

const FriendList = ({ friends }) => {


  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.name}>
          <Friend friendName={friend.name} friendAge={friend.age} friendAvatar={friend.avatar} files={friend.files} addrr={friend.addrr} />
      </li>
    ))}
  </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string.isRequired}))
}

export default FriendList