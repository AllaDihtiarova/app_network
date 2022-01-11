import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => (
  <nav>
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? '#2196f3' : '',
        }
      }}
      to="/"
      className={styles.link}
    >
      Home page
    </NavLink>

    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? '#2196f3' : '',
        }
      }}
      to="/articles"
      className={styles.link}
    >
      Articles
    </NavLink>

    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? '#2196f3' : '',
        }
      }}
      to="/addArticle"
      className={styles.link}
    >
      Add article
    </NavLink>

    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? '#2196f3' : '',
        }
      }}
      to="/profile"
      className={styles.link}
    >
      Profile
    </NavLink>
  </nav>
)

export default Navigation
