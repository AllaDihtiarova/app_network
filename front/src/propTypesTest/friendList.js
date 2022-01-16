import Friend from "./friend"

const FriendList = ({ friends }) => {


  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend friendName={friend.name} friendAge={friend.age} friendAvatar={friend.avatar} files={friend.files} addrr={friend.addrr} />
      </li>
    ))}
  </ul>
  )
}

export default FriendList