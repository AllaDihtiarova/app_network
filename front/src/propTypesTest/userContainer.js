// import PropTypes from 'prop-types'

import FileList from "./fileList"
import Addrr from "./addrr"
import FriendList from "./friendList"

const UserContainer = ({ name, age, avatar, files, addrr, friends }) => {
  const avatarId = `${avatar.file.id}`
  const avatarName = `${avatar.file.name}`
  const avatarPath = `${avatar.file.path}`
  
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>AvatarId: {avatarId}</p>
      <p>AvatarName: {avatarName}</p>
      <p>AvatarPath: {avatarPath}</p>
      <FileList items={files} />
      <Addrr line1={addrr.main.line1} line2={addrr.main.line2} city={addrr.main.city} zip={addrr.main.zip} />
      <Addrr line1={addrr.alt.line1} line2={addrr.alt.line2} city={addrr.alt.city} zip={addrr.alt.zip} />
      <FriendList friends={friends}/>
    </div>
  )
}

export default UserContainer