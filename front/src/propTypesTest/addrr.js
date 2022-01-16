import PropTypes from 'prop-types'

const Addrr = ({ line1, line2, city, zip }) => {
  return (
    <div>
      <p>Line 1: {line1}</p>
      <p>Line 2:{line2}</p>
      <p>City: {city}</p>
      <p>Zip:{zip}</p>
    </div>
  )
}

Addrr.propTypes = {
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
}

export default Addrr