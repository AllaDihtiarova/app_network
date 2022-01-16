import PropTypes from 'prop-types'

import FileList from "./fileList"
import Addrr from "./addrr"

const Friend = ({ friendName, friendAge, friendAvatar, files, addrr }) => {
  const avatarId = `${friendAvatar.file.id}`
  const avatarName = `${friendAvatar.file.name}`
  const avatarPath = `${friendAvatar.file.path}`

  return (
    <div>
      <p>Friend Name: {friendName}</p>
      <p>Friend Age: {friendAge}</p>
      <p>AvatarId: {avatarId}</p>
      <p>AvatarName: {avatarName}</p>
      <p>AvatarPath: {avatarPath}</p>
      <FileList items={files} />
      <Addrr line1={addrr.main.line1} line2={addrr.main.line2} city={addrr.main.city} zip={addrr.main.zip} />
      <Addrr line1={addrr.alt.line1} line2={addrr.alt.line2} city={addrr.alt.city} zip={addrr.alt.zip} />
    </div>
  )
}

Friend.propTypes = {
  friendName: PropTypes.string.isRequired,
  friendAge: PropTypes.string.isRequired,
  friendAvatar: PropTypes.object.isRequired,
  files: PropTypes.arrayOf(PropTypes.object.isRequired),
  addrr: PropTypes.objectOf(PropTypes.object.isRequired)
}

export default Friend