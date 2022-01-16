import PropTypes from 'prop-types'

import File from "./file"

const FileList = ({ items }) => {
  return (
     <ul>
      {items.map(item => (
        <li key={item.id}>
          <File fileId={item.id} fileName={item.name} filePath={item.path} />
      </li>
    ))}
  </ul>
  )
}

FileList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired,}))
}

export default FileList