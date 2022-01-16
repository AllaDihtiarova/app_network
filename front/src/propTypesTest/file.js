import PropTypes from 'prop-types'

const File = ({ fileId, fileName, filePath, key }) => {
  return (
    <div>
      <p>FileId: {fileId}</p>
      <p>FileName: {fileName}</p>
      <p>FilePath: { filePath}</p>
    </div>
  )
}

File.propTypes = {
  fileId: PropTypes.number.isRequired,
  fileName: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
}

export default File