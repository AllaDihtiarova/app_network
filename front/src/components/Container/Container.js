import { Container } from '@mui/material';
import PropTypes from 'prop-types'

const NetworkContainer = ({ children }) => {
  return (
    <Container maxWidth="sm">{children}</Container>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default NetworkContainer 
