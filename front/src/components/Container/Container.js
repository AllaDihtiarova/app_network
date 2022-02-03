import { Container } from '@mui/material';
import PropTypes from 'prop-types'

// import styles from './Container.module.css'

const NetworkContainer = ({ children }) => {
  return (
    <Container maxWidth="sm">{children}</Container>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default NetworkContainer 
